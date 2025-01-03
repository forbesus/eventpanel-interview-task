# Eventpanel Interview Task
Eventpanel Interview Task built with React.js (frontend) and Nest.js (backend), integrated with MariaDB for data storage. This project includes validation, API integration, and a clean, modular architecture for scalability.

## How to set up and run the application
1. Install Dependencies:
```sh
pnpm install
```
2. Set Up Environment Variables:
Create separate `.env` files in both the backend and frontend folders using `.env.example` files as a template
3. Run Prisma Migrations: Set up the database schema using Prisma:
```sh
pnpm run db-deploy
pnpm run migrate
```
4. Start the Backend Server:
```sh
pnpm run backend
```
5. Start the Frontend Server:
```sh
pnpm run frontend
```

## Brief explanation of your architectural choices for the frontend and backend layers

### Backend Architecture
1. Library Design
- Each feature is encapsulated within its own library
2. Database Integration
- Prisma is used as the ORM for database operations, ensuring type safety and simplified query generation
3. Error Handling
- Centralized error handling using custom exception filters
- HTTP exceptions return consistent error messages to the client

### Frontend Architecture
1. Folder Structure
- Modular organization for scalability
- Dedicated directories for `pages`, `services`, `hooks`, `utils` and `contexts`
2. State Management
- React Context API for global state management
- Simplified state handling without using Redux
3. API Integration
- Centralized API calls using Axios, ensuring clean separation of concerns


## Assumptions and Limitations

### Assumptions
1. The backend assumes the database schema is already set up using Prisma migrations
2. The frontend interacts with the backend using Axios, with a base URL set via environment variables

### Limitations
1. The application lacks advanced authentication and authorization mechanisms
2. The frontend does not include extensive error boundary handling for edge cases
3. The app is designed for development and is not yet optimized for production
