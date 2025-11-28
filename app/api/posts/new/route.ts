import Post from '@/models/Post';
import { connectDB } from '@/libs/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  await connectDB();
  const data = await req.json();

  const post = await Post.create(data);

  return NextResponse.json(post);
}
