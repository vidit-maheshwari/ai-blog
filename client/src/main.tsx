import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreatePost from './pages/CreatePost.tsx';
import PostDetail from './pages/PostDetail.tsx';
import EditPost from './pages/EditPost.tsx';
import Home from './pages/Home.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/posts/new",
    element: <CreatePost />,
  },
  {
    path: "/posts/:id",
    element: <PostDetail />,
  },
  {
    path:"/posts/:id/edit",
    element: <EditPost/>,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
