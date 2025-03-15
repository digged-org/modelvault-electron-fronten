import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/app.css';
import { ModelList } from './components/ModelList';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ModelDetails } from './components/ModelDetails';
import { EmptyState } from './components/EmptyState';
import { ThemeProvider } from './context/ThemeContext';

// Define the Model interface
interface Model {
  id: string;
  name: string;
  type: string;
  size: string;
  path: string;
  lastUsed?: Date;
  description?: string;
}

const App: React.FC = () => {
  const [models, setModels] = useState<Model[]>([]);
  const [selectedModelId, setSelectedModelId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // Listen for model import events from the main process
  useEffect(() => {
    if (window.electron) {
      window.electron.receive('model-import', (filePath: string) => {
        // Extract filename from path
        const name = filePath.split(/[\\/]/).pop() || 'Unknown Model';
        
        // Create a new model object
        const newModel: Model = {
          id: Date.now().toString(),
          name,
          type: name.split('.').pop()?.toUpperCase() || 'UNKNOWN',
          size: '0 MB', // In a real app, we would get the actual file size
          path: filePath,
          lastUsed: new Date(),
        };
        
        setModels(prevModels => [...prevModels, newModel]);
        setSelectedModelId(newModel.id);
      });
    }
    
    // Load saved models from preferences
    const loadSavedModels = async () => {
      if (window.electron) {
        const preferences = await window.electron.invoke('load-preferences');
        if (preferences.models) {
          setModels(preferences.models);
        }
      }
    };
    
    loadSavedModels();
  }, []);
  
  // Save models to preferences when they change
  useEffect(() => {
    if (window.electron && models.length > 0) {
      window.electron.invoke('save-preferences', { models });
    }
  }, [models]);
  
  const selectedModel = models.find(model => model.id === selectedModelId) || null;
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const handleSelectModel = (id: string) => {
    setSelectedModelId(id);
  };
  
  const handleDeleteModel = (id: string) => {
    setModels(models.filter(model => model.id !== id));
    if (selectedModelId === id) {
      setSelectedModelId(models.length > 1 ? models[0].id : null);
    }
  };
  
  return (
    <ThemeProvider>
      <div className="app-container">
        <Header toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Sidebar isOpen={sidebarOpen}>
            <ModelList 
              models={models} 
              selectedModelId={selectedModelId}
              onSelectModel={handleSelectModel}
            />
          </Sidebar>
          <main className="content">
            {selectedModel ? (
              <ModelDetails 
                model={selectedModel} 
                onDelete={() => handleDeleteModel(selectedModel.id)} 
              />
            ) : (
              <EmptyState />
            )}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

// Create a container for the React app
const container = document.getElementById('app') || document.body;
const root = createRoot(container);
root.render(<App />);

// Add TypeScript interface for the electron API
declare global {
  interface Window {
    electron?: {
      receive: (channel: string, callback: (...args: any[]) => void) => void;
      invoke: (channel: string, ...args: any[]) => Promise<any>;
    };
  }
}