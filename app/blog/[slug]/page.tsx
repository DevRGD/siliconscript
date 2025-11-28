import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { connectDB } from '@/libs/db';
import Post from '@/models/Post';
import { mdxComponents } from '@/components/BlogRenderer';
import remarkGfm from 'remark-gfm';

type BlogPostParams = Promise<{ slug: string }>;

export default async function BlogPost({ params }: { params: BlogPostParams }) {
  const { slug } = await params;

  try {
    await connectDB();
    const post = await Post.findOne({ slug }).lean();

    if (!post) {
      return notFound();
    }

    return (
      <div className="pb-10 flex items-center justify-center min-h-screen bg-bg px-4 sm:px-8 transition-colors duration-300">
        <div className="w-full max-w-5xl">
          <div className="prose lg:prose-lg mx-auto text-text-secondary bg-surface border border-border shadow-glow rounded-lg px-4 sm:px-6 lg:px-8 py-6 wrap-break-word">
            <h1 className="text-4xl font-bold mt-6 mb-4 text-text-primary">{post.title}</h1>

            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg text-text-primary">
        <p>Error loading post.</p>
      </div>
    );
  }
}
