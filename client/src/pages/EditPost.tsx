import  { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostForm from '../components/PostForm';
import { api } from '../services/api';
import type { Post } from '../types';
import React from 'react';

export default function EditPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      try {
        const response = await api.getPost(id);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, navigate]);

  const handleSubmit = async (data: { title: string; content: string; summary: string }) => {
    if (!id) return;
    await api.updatePost(id, data);
    navigate(`/posts/${id}`);
  };

  if (loading || !post) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <PostForm
        initialData={post}
        onSubmit={handleSubmit}
        submitLabel="Update Post"
      />
    </div>
  );
}