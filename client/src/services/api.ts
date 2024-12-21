

import axios from 'axios';
import type { Post } from '../types';

const API_URL = import.meta.env.VITE_API_URL;

export const api = {
  getPosts: () => axios.get<Post[]>(`${API_URL}/posts`),
  getPost: (id: string) => axios.get<Post>(`${API_URL}/posts/${id}`),
  createPost: (data: Omit<Post, '_id' | 'createdAt' | 'updatedAt'>) => 
    axios.post<Post>(`${API_URL}/posts`, data),
  updatePost: (id: string, data: Partial<Post>) => 
    axios.put<Post>(`${API_URL}/posts/${id}`, data),
  deletePost: (id: string) => axios.delete(`${API_URL}/posts/${id}`),
};