
# AI Blog Platform

## Overview

AI Blog Platform is a web application that allows users to create, edit, and delete blog posts. The application is built using React, TypeScript, and Tailwind CSS for the frontend, and Node.js with Express and MongoDB for the backend.

## Features

- Create, edit, and delete blog posts
- View a list of all blog posts
- View details of a single blog post
- Responsive design

## Project Structure
project/ ├── client/ │ ├── public/ │ ├── src/ │ │ ├── components/ │ │ │ ├── Navbar.tsx │ │ ├── pages/ │ │ │ ├── Home.tsx │ │ │ ├── PostDetail.tsx │ │ ├── services/ │ │ │ ├── api.ts │ │ ├── types/ │ │ │ ├── index.ts │ │ ├── App.tsx │ │ ├── main.tsx │ ├── .env │ ├── index.html │ ├── package.json ├── server/ │ ├── models/ │ │ ├── Post.js │ ├── routes/ │ │ ├── posts.js │ ├── index.js │ ├── .env │ ├── package.json ├──


## Installation

1. Clone the repository:

```sh
git clone https://github.com/yourusername/blog-platform.git
cd blog-platform

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install

Create a .env file in both client and server directories with the following content:
Client .env

VITE_API_URL=http://localhost:5000/api

Server .env
MONGODB_URI='mongodb://localhost:27017/blog'
PORT=5000

Start the development servers:
# Start client
cd client
npm run dev

# Start server
cd ../server
npm run dev

API Routes
Posts
GET /api/posts - Get all posts
GET /api/posts/:id - Get a single post by ID
POST /api/posts - Create a new post
PUT /api/posts/:id - Update a post by ID
DELETE /api/posts/:id - Delete a post by ID


Navigation
Components
Navbar.tsx - The navigation bar component
Pages
Home.tsx - The home page that displays a list of all blog posts
PostDetail.tsx - The page that displays the details of a single blog post
Services
api.ts - Contains functions to interact with the backend API
Types
index.ts - Contains TypeScript types used in the application
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.

License
This project is licensed under the MIT License.