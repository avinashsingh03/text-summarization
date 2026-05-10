# Text Summarization App

A full-stack web application for text summarization, featuring a React frontend and Node.js backend.

Live link: https://text-summarization-smoky.vercel.app/

## Features

- Upload and summarize text documents
- Download summarized text
- Modern UI with React and Vite
- RESTful API backend with Express.js

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```
   git clone <https://github.com/avinashsingh03/text-summarization.git>
   cd text-summarization
   ```

2. Install backend dependencies:
   ```
   cd Backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ../Frontend/"Text Summarization"
   npm install
   ```

## Running the Application

1. Start the backend server:
   ```
   cd Backend
   npm start
   ```
   The backend will run on `http://localhost:3000` (or as configured).

2. Start the frontend development server:
   ```
   cd ../Frontend/"Text Summarization"
   npm run dev
   ```
   The frontend will run on `http://localhost:5173` (default Vite port).

3. Open your browser and navigate to the frontend URL to use the app.

## Building for Production

1. Build the frontend:
   ```
   cd Frontend/"Text Summarization"
   npm run build
   ```

2. The built files will be in the `dist` folder. Serve them with a static server or integrate with the backend.

## Technologies Used

- **Frontend**: React, Vite, ESLint
- **Backend**: Node.js, Express.js
- **Other**: JavaScript, HTML, CSS

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
