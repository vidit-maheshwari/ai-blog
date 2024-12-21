# AI Blog Platform

## Overview

AI Blog Platform is a web application that allows users to create, edit, and delete blog posts. The application is built using React, TypeScript, and Tailwind CSS for the frontend, and Node.js with Express and MongoDB for the backend.

## Features

- Create, edit, and delete blog posts
- View a list of all blog posts
- View details of a single blog post
- Responsive design

## Project Structure

```plaintext
project/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── PostDetail.tsx
│   │   ├── services/
│   │   │   ├── api.ts
│   │   ├── types/
│   │   │   ├── index.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   ├── .env
│   ├── index.html
│   ├── package.json
├── server/
│   ├── models/
│   │   ├── Post.js
│   ├── routes/
│   │   ├── posts.js
│   ├── index.js
│   ├── .env
│   ├── package.json
```

## Tech Stack

The project is built using the following technologies:

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other Tools**: Vite for development, Daisy UI for styled components

---

## Dependencies

Here are the primary dependencies used in the project:

### Client-Side Dependencies:
- **React**: JavaScript library for building user interfaces.
- **React Router**: For routing and navigation.
- **TypeScript**: For static typing.
- **Axios**: For making HTTP requests.
- **Tailwind CSS**: For styling components.



## Installation

1. Clone the repository:

    ```sh
    git clone  https://github.com/vidit-maheshwari/ai-blog.git
    cd blog-platform
    ```

2. Install client dependencies:

    ```sh
    cd client
    npm install
    ```

3. Install server dependencies:

    ```sh
    cd ../server
    npm install
    ```

4. Create a `.env` file in both client and server directories with the following content:

    **Client `.env`**

    ```env
    VITE_API_URL=http://localhost:5000/api
    VITE_GEMINI_API_KEY='your-api-key'
    ```

    **Server `.env`**

    ```env
    MONGODB_URI='mongodb://localhost:27017/blog'
    PORT=5000
    ```

5. Start the development servers:

    - Start client:
    
      ```sh
      cd client
      npm run dev
      ```

    - Start server:

      ```sh
      cd ../server
      npm run dev
      ```

## API Routes

### Posts

- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get a single post by ID
- `POST /api/posts` - Create a new post
- `PUT /api/posts/:id` - Update a post by ID
- `DELETE /api/posts/:id` - Delete a post by ID

## Navigation

### Components

- **Navbar.tsx** - The navigation bar component

### Pages

- **Home.tsx** - The home page that displays a list of all blog posts
- **PostDetail.tsx** - The page that displays the details of a single blog post
- **CreatePost.tsx** - A page where users can write and submit a new blog post.
- **EditPost.tsx** -  A page where users can edit an existing blog post.


### Services

- **api.ts** - Contains functions to interact with the backend API

### Types

- **index.ts** - Contains TypeScript types used in the application

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.


