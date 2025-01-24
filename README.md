# Todo List Backend

## Overview
This is the backend service for the Todo List Application, developed using Express.js. It provides authentication and CRUD operations for managing user-specific todo items. The backend is designed to be robust, secure, and efficient.

## Features
- **Authentication**:
  - User registration and login functionality.
  - Secure authentication using JWT tokens.
- **Task Management**:
  - CRUD operations for todo items:
    - Create, retrieve, update, and delete tasks.
  - User-specific todos: Users can only access and manage their own tasks.
- **Database Integration**:
  - Uses MySQL as the database.
  - Managed through TypeORM for database operations.
- **Validation**:
  - Input validation using Express Validator to ensure data integrity.

## Technologies Used
- **Framework**: Express.js
- **Database**: MySQL (via TypeORM)
- **Authentication**: JWT (JSON Web Tokens)
- **Environment Management**: dotenv
- **Validation**: express-validator

## Prerequisites
- Node.js and Yarn installed on your system.
- MySQL server installed and running.

## Setup and Installation

### Clone the Repository
```bash
git clone <repository_url>
cd <repository_folder>
```

### Install Dependencies
Ensure you have `yarn` installed. Then run:
```bash
yarn install
```

### Configure Environment Variables
Create a `.env` file in the root directory and add the following variables:
```env
DB_TYPE=mysql
DB_HOST=<database_host>
DB_USERNAME=<database_username>
DB_PASSWORD=database_password
DB_PORT=3306
DB_NAME=<database_name>
PORT=8000
SECRET_KEY=<your_jwt_secret>
EXPIRE_TIME=3600
```
Replace `<your_jwt_secret>` and database connection details with your actual values.

### Run the Application
To start the development server, run:
```bash
yarn dev
```
The server will start on `http://localhost:8000`.

### API Endpoints

#### Authentication
- `POST /api/v1/auth/register` - User registration.
- `POST /api/v1/auth/login` - User login and token generation.

#### Todo Management
- `GET /api/v1/todos` - Retrieve all todos for the authenticated user.
- `POST /api/v1/todos` - Create a new todo item.
- `PUT /api/v1/todos/{id}` - Update an existing todo item.
- `DELETE /api/v1/todos/{id}` - Delete a todo item.

### Database Setup
Ensure your MySQL database is running and accessible. Then configure your `.env` file with the correct database credentials. Use TypeORM's CLI or a tool like MySQL Workbench to set up the database schema.

### Testing
Testing functionality can be added to the application. Run the following command as a placeholder for tests:
```bash
yarn test
```

## Project Structure
```
backend/
├── src/
│   ├── controllers/   # Request handlers
│   ├── middlewares/   # Middleware logic
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   ├── utils/         # Utility functions
│   └── index.ts       # Entry point
├── .env                # Environment variables
└── package.json        # Project configuration
```

## Future Improvements
- **Testing**: Add comprehensive unit and integration tests.
- **Pagination**: Implement pagination for fetching todos.
- **Search and Filtering**: Enable searching and filtering of todo items.
- **Logging**: Add logging for better debugging and monitoring.

## Conclusion
The Todo List Backend provides a strong foundation for managing tasks with secure user authentication and robust CRUD operations. Contributions and suggestions for improvement are welcome!

