import { NextResponse } from 'next/server';
import { connectDB } from '@/libs/db';
import Post from '@/models/Post';

export async function GET(req: Request, { params }: { params: Promise<{ slug: String }> }) {
  try {
    await connectDB();

    const { slug } = await params;

    const post = await Post.findOne({ slug }).lean();

    if (!post) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (err: any) {
    return NextResponse.json({ error: 'Server error', details: err.message }, { status: 500 });
  }
}
