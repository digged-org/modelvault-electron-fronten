# ModelVault

ModelVault is a modern desktop application for managing and organizing AI models. It provides a clean, intuitive interface for importing, organizing, and using various AI model formats.

![ModelVault Screenshot](https://via.placeholder.com/800x450.png?text=ModelVault+Screenshot)

## Features

- **Model Management**: Import and organize AI models in various formats (ONNX, PyTorch, GGUF, etc.)
- **Model Details**: View detailed information about your models
- **Dark/Light Mode**: Automatically adapts to your system preferences or can be toggled manually
- **Cross-Platform**: Works on macOS, Windows, and Linux
- **Modern UI**: Clean, responsive interface built with React and TypeScript
- **Secure**: Built with security best practices, including context isolation

## Installation

### macOS

Download the latest `.dmg` file from the [releases page](https://github.com/digged-org/modelvault-electron-frontend/releases) and drag the application to your Applications folder.

For Apple Silicon (M1/M2) Macs, use the arm64 version for best performance.

### Windows

Download the latest `.exe` installer from the [releases page](https://github.com/digged-org/modelvault-electron-frontend/releases) and run it to install ModelVault.

### Linux

Download the appropriate package for your distribution from the [releases page](https://github.com/digged-org/modelvault-electron-frontend/releases):

- `.deb` for Debian/Ubuntu-based distributions
- `.rpm` for Red Hat/Fedora-based distributions
- `.AppImage` for other distributions

## Development

### Prerequisites

- Node.js 16 or later
- npm or yarn

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/digged-org/modelvault-electron-frontend.git
   cd modelvault-electron-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

### Building

To build the application for production:

```bash
npm run make
# or
yarn make
```

This will create platform-specific packages in the `out` directory.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Electron](https://www.electronjs.org/) - Framework for building cross-platform desktop apps
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Electron Forge](https://www.electronforge.io/) - Tool for building and publishing Electron applications 