# To-Do List App

A simple, clean to-do list app built with React and backed by AWS. Add tasks, mark them complete, and delete them — split across two columns so you can see what's left and what's done at a glance. Your tasks are saved in the cloud, so they're always there when you come back.

Check it out [live](https://main.d2bcw8jrrso8ao.amplifyapp.com/).

## Features

- ➕ Add new tasks with a text input (press Enter or click Add)
- ✅ Mark tasks as complete / undo them
- 🗑️ Delete tasks you no longer need
- 📋 Two-column board layout: **To-Do** and **Complete**, each with a live item count
- 🕳️ Friendly empty states when a column has no items
- ☁️ Tasks persist in the cloud — no data lost on refresh

## Tech Stack

**Frontend**
- [React 19](https://react.dev/) — UI library, built with function components and hooks (`useState`, `useEffect`)
- [Vite](https://vitejs.dev/) — dev server and build tool
- [ESLint](https://eslint.org/) — linting for code quality
- CSS - styling the website

**Backend**
- **AWS Amplify** — backend-as-code framework connecting the app to AWS
- **Amazon DynamoDB** — stores the to-do items
- **AWS AppSync** — GraphQL API the app talks to for reading/writing data
- **Amazon Cognito** — identity pool powering guest access to the API
- **AWS Amplify Hosting** — builds and deploys the app on every push to `main`

## Getting Started

1. Clone the repo and open the `my-app` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Deploy a personal cloud backend (requires AWS credentials configured via `aws configure`):
   ```bash
   npx ampx sandbox
   ```
   Leave this running — it watches for backend changes and keeps your cloud resources in sync.
4. In a second terminal, start the dev server:
   ```bash
   npm run dev
   ```
5. Open the URL shown in the terminal (usually `http://localhost:5173`) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server with hot reload |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint over the project |
| `npx ampx sandbox` | Deploy and watch a personal cloud backend for local development |

## Project Structure

```
amplify/
├── auth/resource.ts    # Cognito auth configuration
├── data/resource.ts     # DynamoDB data model (Todo)
└── backend.ts           # Backend entry point
src/
├── App.jsx       # Main component: cloud data logic, board layout
├── App.css       # Component styling
├── main.jsx      # React entry point, configures Amplify
└── index.css     # Global styles
```

