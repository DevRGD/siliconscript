import Link from 'next/link';
import { Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-3">SiliconScript</h2>
            <p className="text-gray-600">A modern blog built with Next.js, MongoDB, and Markdown.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Explore</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="/blog" className="hover:underline">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:underline">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/tags" className="hover:underline">
                  Tags
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Useful</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Follow</h3>
            <div className="flex gap-4 text-gray-700">
              <Link href="https://github.com" target="_blank">
                <Github className="w-6 h-6 hover:text-black" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Twitter className="w-6 h-6 hover:text-black" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} SiliconScript. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
