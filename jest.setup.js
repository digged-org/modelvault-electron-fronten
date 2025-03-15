// Import Jest DOM extensions
import '@testing-library/jest-dom';

// Mock the Electron API
window.electron = {
  receive: jest.fn(),
  invoke: jest.fn(),
  send: jest.fn(),
}; 