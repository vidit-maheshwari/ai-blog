
import { useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';
import { api } from '../services/api';
import React from 'react';

export default function CreatePost() {
  const navigate = useNavigate();

  const handleSubmit = async (data: { title: string; content: string; summary: string }) => {
    const response = await api.createPost(data);
    navigate(`/posts/${response.data._id}`);
  };

  return (
    <div className="max-w-3xl mx-auto">
      
      <PostForm onSubmit={handleSubmit} submitLabel="Create Post" />
    </div>
  );
}