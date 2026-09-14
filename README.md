# To-Do List App

A simple, clean to-do list app built with React. Add tasks, mark them complete, and delete them — split across two columns so you can see what's left and what's done at a glance.

## Features

- ➕ Add new tasks with a text input (press Enter or click Add)
- ✅ Mark tasks as complete / undo them
- 🗑️ Delete tasks you no longer need
- 📋 Two-column board layout: **To-Do** and **Complete**, each with a live item count
- 🕳️ Friendly empty states when a column has no items

## Tech Stack

- [React 19](https://react.dev/) — UI library, built with function components and hooks (`useState`, `useEffect`)
- [Vite](https://vitejs.dev/) — dev server and build tool
- [ESLint](https://eslint.org/) — linting for code quality
- Plain CSS for styling (no external UI framework)

## Getting Started

1. Clone the repo and open the `my-app` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open the URL shown in the terminal (usually `http://localhost:5173`) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server with hot reload |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint over the project |

## Project Structure

```
src/
├── App.jsx       # Main component: state, task logic, board layout
├── App.css       # Component styling
├── data.json     # Sample seed data for the to-do list
├── main.jsx      # React entry point
└── index.css     # Global styles
```

## About This Project

This app was built incrementally, one small feature at a time (scaffold → render data → split columns → mark complete → add items → delete items → polish), as a hands-on exercise in planning and implementing a React app with AI coding assistants.
