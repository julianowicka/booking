# Booking Application

Aplikacja służy do rezerwacji, umożliwiając użytkownikom przeglądanie i zarządzanie terminami.

W środku znajdziesz GraphQL API oparte o Apollo Server, które daje ogromną elastyczność w komunikacji między frontendem a backendem.

📦 Dane trzymane są w MongoDB Atlas, a cały projekt został napisany w TypeScript, co sprawia, że kod jest czysty i bezpieczny.

✨ Frontend to React z hookami, hot‑reloading i nowoczesne komponenty, dzięki czemu aplikacja działa szybko i przyjemnie.

A full-stack booking application built with React, Node.js, Express, GraphQL, Apollo, MongoDB, and TypeScript.

## Project Structure

```
booking/
├── client/          # React frontend application
├── server/          # Node.js/Express backend with GraphQL API
└── README.md        # This file
```

## Technologies Used

### Backend (Server)
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **GraphQL** - Query language for APIs
- **Apollo Server** - GraphQL server implementation
- **MongoDB** - NoSQL database
- **TypeScript** - Type-safe JavaScript

### Frontend (Client)
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Create React App** - React application scaffolding
- **Webpack** - Module bundler (configured by CRA)

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account (for database)

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your MongoDB Atlas credentials
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The GraphQL API will be available at `http://localhost:9000/api`

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The React app will be available at `http://localhost:3000`

## Features

### Backend Features
- ✅ GraphQL API with Apollo Server
- ✅ MongoDB integration with Atlas
- ✅ Data seeding functionality
- ✅ Modular GraphQL resolvers
- ✅ TypeScript support
- ✅ Environment variable configuration

### Frontend Features
- ✅ Modern React with TypeScript
- ✅ Functional components with hooks
- ✅ JSX syntax
- ✅ Props and state management
- ✅ Hot reloading development server

## Development

### Backend Development
- GraphQL Playground: `http://localhost:9000/api`
- Database seeding: `npm run seed`
- Build: `npm run build`

### Frontend Development
- Development server: `http://localhost:3000`
- Build: `npm run build`
- Tests: `npm test`


## Security Notes

- Environment variables (`.env`) are excluded from version control
- Database credentials are kept secure
- `.env.example` provides template for required environment variables 