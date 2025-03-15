// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron';

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electron', {
  // Send a message to the main process
  send: (channel: string, data: any) => {
    // Whitelist channels
    const validChannels = ['save-preferences', 'load-preferences'];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  
  // Receive a message from the main process
  receive: (channel: string, func: (...args: any[]) => void) => {
    // Whitelist channels
    const validChannels = ['model-import'];
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender` 
      ipcRenderer.on(channel, (_, ...args) => func(...args));
    }
  },
  
  // Invoke a method in the main process and get a promise for the result
  invoke: (channel: string, ...args: any[]) => {
    // Whitelist channels
    const validChannels = ['save-preferences', 'load-preferences'];
    if (validChannels.includes(channel)) {
      return ipcRenderer.invoke(channel, ...args);
    }
    
    return Promise.reject(new Error(`Unauthorized IPC channel: ${channel}`));
  }
});
