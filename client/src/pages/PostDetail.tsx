import  { useEffect, useState } from 'react';
import { useNavigate, useParams, Link, NavLink } from 'react-router-dom';
import { api } from '../services/api';
import type { Post } from '../types';
import { Calendar, Edit, Trash2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import React from 'react';

export default function PostDetail() {
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

  const handleDelete = async () => {
    if (!id || !window.confirm('Are you sure you want to delete this post?')) return;
    
    try {
      await api.deletePost(id);
      navigate('/');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  if (loading || !post) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
      <article className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 bg-white shadow-md rounded-lg  ">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(post.createdAt).toLocaleDateString()}
          </div>
          <div className="flex gap-2">
            <Link
              to={`/posts/${id}/edit`}
              className="inline-flex items-center px-3 py-1.5 text-sm text-blue-600 hover:text-blue-700 border border-blue-600 rounded-md"
            >
              <Edit className="w-4 h-4 mr-1" />
              Edit
            </Link>
            <button
              onClick={handleDelete}
              className="inline-flex items-center px-3 py-1.5 text-sm text-red-600 hover:text-red-700 border border-red-600 rounded-md"
            >
              <Trash2 className="w-4 h-4 mr-1" />
              Delete
            </button>
            <NavLink to="/"
              
              className="inline-flex items-center px-3 py-1.5 text-sm text-blue-400 underline underline-offset-2 hover:text-black  rounded-md"
            >
              
              Back Home
            </NavLink>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="bg-gray-100 rounded-lg p-4 mb-8">
          <h2 className="text-sm font-medium text-gray-700 mb-2">Summary</h2>
          <p className="text-gray-600">{post.summary}</p>
        </div>
        <div className="prose max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </article>
      </div>
    </>
  );
}