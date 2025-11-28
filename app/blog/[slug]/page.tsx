import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { connectDB } from '@/libs/db';
import Post from '@/models/Post';
import {
  CodeBlock,
  CustomImage,
  CustomLink,
  MdxH1,
  MdxH2,
  MdxH3,
  MdxP,
  MdxUl,
  MdxOl,
  MdxBlockquote,
  MdxHr,
  MdxInlineCode,
} from '@/components/BlogRenderer';

type BlogPostParams = Promise<{ slug: string }>;

const components = {
  h1: MdxH1,
  h2: MdxH2,
  h3: MdxH3,
  p: MdxP,
  ul: MdxUl,
  ol: MdxOl,
  blockquote: MdxBlockquote,
  hr: MdxHr,
  img: CustomImage,
  a: CustomLink,

  pre: ({ children }: any) => <>{children}</>,
  code: ({ className, children }: any) => {
    if (className) {
      return <CodeBlock className={className}>{children}</CodeBlock>;
    }

    return <MdxInlineCode>{children}</MdxInlineCode>;
  },
};

export default async function BlogPost({ params }: { params: BlogPostParams }) {
  const { slug } = await params;

  try {
    await connectDB();
    const post = await Post.findOne({ slug }).lean();

    if (!post) {
      return notFound();
    }

    return (
      <div className="pb-10 flex items-center justify-center min-h-screen bg-gray-950 px-4 sm:px-8">
        <div className="w-full max-w-5xl">
          <div className="prose lg:prose-lg mx-auto text-gray-300 bg-gray-950 shadow-md rounded-lg px-4 sm:px-6 lg:px-8 py-6 wrap-break-word">
            <h1 className="text-4xl font-bold mt-6 mb-4 text-white">{post.title}</h1>
            <MDXRemote source={post.content} components={components} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <p>Error loading post.</p>
      </div>
    );
  }
}
