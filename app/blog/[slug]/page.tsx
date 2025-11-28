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
      <div className="pb-20 pt-10 min-h-screen bg-bg transition-colors duration-300">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
          <article className="prose lg:prose-xl mx-auto text-text-secondary wrap-break-word">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-text-primary tracking-tight">{post.title}</h1>
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </article>
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
