import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';
import type { Post } from '../types';
import { Calendar, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import React from 'react';


export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.getPosts();
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
   <>
   <div>
    <Navbar />
   </div>
     <div className="space-y-8 mx-10 mt-5">
      <h1 className="text-3xl font-bold text-gray-900 ml-5">All Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.createdAt).toLocaleDateString()}
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.summary}
              </p>
              <Link
                to={`/posts/${post._id}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                Read more
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
   </>
  );
}