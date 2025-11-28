import Post from '@/models/Post';
import { connectDB } from './db';

export async function getTopBlogs() {
  await connectDB();
  return Post.find().sort({ views: -1 }).limit(5).lean();
}

export async function getRecentBlogs() {
  await connectDB();
  return Post.find().sort({ createdAt: -1 }).limit(5).lean();
}

export async function getBlogsByCategories() {
  await connectDB();
  return Post.aggregate([{ $group: { _id: '$category', posts: { $push: '$$ROOT' } } }, { $limit: 5 }]);
}
