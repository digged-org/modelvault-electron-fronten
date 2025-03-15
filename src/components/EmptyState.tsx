import React from 'react';

export const EmptyState: React.FC = () => {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 6V12.28C4 16.12 7.28 19.72 12 21C16.72 19.72 20 16.12 20 12.28V6L12 2ZM12 19.08C8.48 17.92 6 15.12 6 12.28V7.2L12 4.2L18 7.2V12.28C18 15.12 15.52 17.92 12 19.08Z" fill="currentColor" />
          <path d="M12 11C10.9 11 10 11.9 10 13C10 14.1 10.9 15 12 15C13.1 15 14 14.1 14 13C14 11.9 13.1 11 12 11ZM12 14C11.45 14 11 13.55 11 13C11 12.45 11.45 12 12 12C12.55 12 13 12.45 13 13C13 13.55 12.55 14 12 14Z" fill="currentColor" />
          <path d="M13 7H11V9H13V7Z" fill="currentColor" />
          <path d="M13 16H11V18H13V16Z" fill="currentColor" />
          <path d="M17 11H15V13H17V11Z" fill="currentColor" />
          <path d="M9 11H7V13H9V11Z" fill="currentColor" />
        </svg>
      </div>
      <h2 className="empty-state-title">No Model Selected</h2>
      <p className="empty-state-description">
        Select a model from the sidebar or import a new one to get started.
      </p>
      <div className="empty-state-actions">
        <button 
          className="primary-button"
          onClick={() => {
            alert('Use File > Import Model from the menu to import a model');
          }}
        >
          Import Model
        </button>
      </div>
    </div>
  );
}; 