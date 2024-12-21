import Post from '../models/post.model.js';
import express from 'express';
import mongoose from 'mongoose';

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json(post);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }

const createPost = async (req, res) => {
     try {
        const post = new Post(req.body);
        const savedPost = await post.save();
        res.status(201).json(savedPost);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }

const updatePost = async (req, res) => {
     try {
        const post = await Post.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json(post);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }

const deletePost = async (req, res) => {
     try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json({ message: 'Post deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }

export  { getPosts, getPostById, createPost, updatePost, deletePost };