import React from 'react';

interface Model {
  id: string;
  name: string;
  type: string;
  size: string;
  path: string;
  lastUsed?: Date;
  description?: string;
}

interface ModelListProps {
  models: Model[];
  selectedModelId: string | null;
  onSelectModel: (id: string) => void;
}

export const ModelList: React.FC<ModelListProps> = ({ 
  models, 
  selectedModelId, 
  onSelectModel 
}) => {
  if (models.length === 0) {
    return (
      <div className="empty-model-list">
        <p>No models found</p>
        <p className="hint">Use File &gt; Import Model to add a model</p>
      </div>
    );
  }

  return (
    <ul className="model-list">
      {models.map(model => (
        <li 
          key={model.id}
          className={`model-item ${selectedModelId === model.id ? 'selected' : ''}`}
          onClick={() => onSelectModel(model.id)}
        >
          <div className="model-icon">
            {getModelIcon(model.type)}
          </div>
          <div className="model-info">
            <div className="model-name">{model.name}</div>
            <div className="model-meta">
              <span className="model-type">{model.type}</span>
              <span className="model-size">{model.size}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

// Helper function to get an icon based on model type
function getModelIcon(type: string): React.ReactElement {
  // Default icon
  const defaultIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L4 6V12.28C4 16.12 7.28 19.72 12 21C16.72 19.72 20 16.12 20 12.28V6L12 2ZM18 12.28C18 15.12 15.52 17.92 12 19.08C8.48 17.92 6 15.12 6 12.28V7.2L12 4.2L18 7.2V12.28Z" fill="currentColor" />
    </svg>
  );
  
  // Type-specific icons could be added here
  switch (type.toLowerCase()) {
    case 'onnx':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 6V12.28C4 16.12 7.28 19.72 12 21C16.72 19.72 20 16.12 20 12.28V6L12 2ZM12 19.08C8.48 17.92 6 15.12 6 12.28V7.2L12 4.2L18 7.2V12.28C18 15.12 15.52 17.92 12 19.08Z" fill="currentColor" />
          <path d="M11 7H13V17H11V7Z" fill="currentColor" />
          <path d="M15 11H9V13H15V11Z" fill="currentColor" />
        </svg>
      );
    case 'pt':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 6V12.28C4 16.12 7.28 19.72 12 21C16.72 19.72 20 16.12 20 12.28V6L12 2ZM12 19.08C8.48 17.92 6 15.12 6 12.28V7.2L12 4.2L18 7.2V12.28C18 15.12 15.52 17.92 12 19.08Z" fill="currentColor" />
          <path d="M9.5 9H11.5V15H13.5V9H15.5V7H9.5V9Z" fill="currentColor" />
        </svg>
      );
    case 'gguf':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 6V12.28C4 16.12 7.28 19.72 12 21C16.72 19.72 20 16.12 20 12.28V6L12 2ZM12 19.08C8.48 17.92 6 15.12 6 12.28V7.2L12 4.2L18 7.2V12.28C18 15.12 15.52 17.92 12 19.08Z" fill="currentColor" />
          <path d="M9 9H11V11H9V9Z" fill="currentColor" />
          <path d="M13 9H15V11H13V9Z" fill="currentColor" />
          <path d="M9 13H11V15H9V13Z" fill="currentColor" />
          <path d="M13 13H15V15H13V13Z" fill="currentColor" />
        </svg>
      );
    default:
      return defaultIcon;
  }
} 