import React, { useState } from 'react';
import { generateSummary } from '../services/ai';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

interface PostFormProps {
  initialData?: {
    title: string;
    content: string;
    summary: string;
  };
  onSubmit: (data: { title: string; content: string; summary: string }) => Promise<void>;
  submitLabel: string;
}

export default function PostForm({ initialData, onSubmit, submitLabel }: PostFormProps) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [summary, setSummary] = useState(initialData?.summary || '');
  const [loading, setLoading] = useState(false);

  const handleGenerateSummary = async () => {
    if (!content) return;
    
    try {
      setLoading(true);
      const generatedSummary = await generateSummary(content);
      setSummary(generatedSummary);
    } catch (error) {
      console.error('Error generating summary:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content || !summary) return;

    try {
      setLoading(true);
      await onSubmit({ title, content, summary });
    } catch (error) {
      console.error('Error submitting post:', error);
    } finally {
      setLoading(false);
    }
  };

  const id = useParams<{ id: string }>().id;

  return (

    <form onSubmit={handleSubmit} className="space-y-6 p-10">
      <div>
        <div className='flex justify-between items-center'>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{id?'Edit Post':'Create New Post'}</h1>
        <NavLink to="/" className="text-blue-600 hover:text-blue-700"> &larr; Back to home</NavLink>
        </div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border-2"
          required
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={8}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border-2 "
          required
        />
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <label htmlFor="summary" className="block text-sm font-medium text-gray-700">
            Summary
          </label>
          <button
            type="button"
            onClick={handleGenerateSummary}
            className="text-sm text-blue-600 hover:text-blue-700"
            disabled={!content || loading}
          >
            Generate with AI
          </button>
        </div>
        <textarea
          id="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border-2"
          required
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Processing...' : submitLabel}
        </button>
      </div>
    </form>
  );
}