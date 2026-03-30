# 🏗️ Concreto POC

![React](https://img.shields.io/badge/React-18.0+-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.0+-purple?style=for-the-badge&logo=vite)
![React Flow](https://img.shields.io/badge/React_Flow-11.0+-ff0072?style=for-the-badge&logo=react)

**Concreto POC** is a Proof of Concept application demonstrating an interactive, node-based workspace. Built with React Flow, it provides a scalable canvas for mapping out concepts, logic, and workflows using customized node components.

---

## ✨ Key Features

* **Interactive Canvas:** Pan, zoom, and navigate the workspace smoothly.
* **Custom Concept Nodes:** Utilizes specialized `ConceptNode` components for customized data display and interaction.
* **Strictly Typed:** Built entirely with TypeScript for robust code quality and autocomplete support.
* **Lightning Fast:** Powered by Vite for instant Hot Module Replacement (HMR) during local development.

---

## 🛠️ Technology Stack

* **Core Framework:** [React](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Diagramming Engine:** [React Flow](https://reactflow.dev/)

---

## 🚀 Quick Start (Local Development)

To run this Proof of Concept locally on your machine:

1. **Navigate to the project directory:**
   Ensure your terminal is located in the `Concreto_poc` folder.
   ```bash
   cd C:\src\Concreto_poc
Install the required dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
View the application:
Hold Ctrl and click the http://localhost:5173/ link in your terminal to open the canvas in your browser.

📂 Project Structure
Here is an overview of the core application files:

Plaintext
CONCRETO_POC/
├── public/               # Static assets
├── src/                  
│   ├── assets/           # Images, icons, and local media
│   ├── App.tsx           # Main application entry point & React Flow canvas
│   ├── ConceptNode.tsx   # Custom React Flow node component
│   ├── index.css         # Global stylesheet
│   ├── main.tsx          # React DOM rendering script
│   └── vite-env.d.ts     # TypeScript declarations for Vite
├── package.json          # Project metadata and dependency list
├── tsconfig.json         # TypeScript configuration rules
└── vite.config.ts        # Vite build and plugin configuration
📜 Available Scripts
npm run dev: Runs the app in development mode with hot-reloading.

npm run build: Compiles the TypeScript and builds the app for production into a dist folder.

npm run lint: Runs ESLint to catch syntax and style issues.

npm run preview: Boots up a local web server to preview your production build.
