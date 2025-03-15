import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, children }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <h2>Models</h2>
        <button 
          className="import-button"
          onClick={() => {
            // This is just a UI button - the actual import is handled by the menu
            // We could implement a direct import here as well
            alert('Use File > Import Model from the menu to import a model');
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="currentColor" />
          </svg>
          Import
        </button>
      </div>
      <div className="sidebar-content">
        {children}
      </div>
    </aside>
  );
}; 