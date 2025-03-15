import React, { useState } from 'react';

interface Model {
  id: string;
  name: string;
  type: string;
  size: string;
  path: string;
  lastUsed?: Date;
  description?: string;
}

interface ModelDetailsProps {
  model: Model;
  onDelete: () => void;
}

export const ModelDetails: React.FC<ModelDetailsProps> = ({ model, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(model.description || '');
  
  const handleSave = () => {
    // In a real app, we would save this to the model object
    // and persist it to storage
    model.description = description;
    setIsEditing(false);
  };
  
  const formatDate = (date?: Date) => {
    if (!date) return 'Never';
    return new Date(date).toLocaleString();
  };
  
  return (
    <div className="model-details">
      <div className="model-details-header">
        <h2>{model.name}</h2>
        <div className="model-actions">
          <button 
            className="edit-button"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          <button 
            className="delete-button"
            onClick={() => {
              if (window.confirm('Are you sure you want to remove this model from the list?')) {
                onDelete();
              }
            }}
          >
            Delete
          </button>
        </div>
      </div>
      
      <div className="model-metadata">
        <div className="metadata-item">
          <span className="metadata-label">Type:</span>
          <span className="metadata-value">{model.type}</span>
        </div>
        <div className="metadata-item">
          <span className="metadata-label">Size:</span>
          <span className="metadata-value">{model.size}</span>
        </div>
        <div className="metadata-item">
          <span className="metadata-label">Path:</span>
          <span className="metadata-value path">{model.path}</span>
        </div>
        <div className="metadata-item">
          <span className="metadata-label">Last Used:</span>
          <span className="metadata-value">{formatDate(model.lastUsed)}</span>
        </div>
      </div>
      
      <div className="model-description">
        <h3>Description</h3>
        {isEditing ? (
          <div className="description-edit">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add a description for this model..."
              rows={5}
            />
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
          </div>
        ) : (
          <p className="description-text">
            {model.description || 'No description provided. Click Edit to add one.'}
          </p>
        )}
      </div>
      
      <div className="model-actions-panel">
        <h3>Actions</h3>
        <div className="action-buttons">
          <button className="action-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V1L8 5L12 9V6C15.31 6 18 8.69 18 12C18 13.01 17.75 13.97 17.3 14.8L18.76 16.26C19.54 15.03 20 13.57 20 12C20 7.58 16.42 4 12 4ZM12 18C8.69 18 6 15.31 6 12C6 10.99 6.25 10.03 6.7 9.2L5.24 7.74C4.46 8.97 4 10.43 4 12C4 16.42 7.58 20 12 20V23L16 19L12 15V18Z" fill="currentColor" />
            </svg>
            Run Inference
          </button>
          <button className="action-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="currentColor" />
            </svg>
            Export
          </button>
          <button className="action-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16.5L4 8.5H9V4.5H15V8.5H20L12 16.5ZM4 18.5V20.5H20V18.5H4Z" fill="currentColor" />
            </svg>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}; 