import Link from 'next/link';
import { Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-3 text-primary">SiliconScript</h2>
            <p className="text-text-secondary">A modern blog built with Next.js, MongoDB, and Markdown.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-text-primary">Explore</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>
                <Link href="/blog" className="hover:text-primary hover:underline">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-primary hover:underline">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/tags" className="hover:text-primary hover:underline">
                  Tags
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-text-primary">Useful</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>
                <Link href="/privacy" className="hover:text-primary hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-text-primary">Follow</h3>
            <div className="flex gap-4 text-text-secondary">
              <Link href="https://github.com" target="_blank">
                <Github className="w-6 h-6 hover:text-primary transition-colors" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Twitter className="w-6 h-6 hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-text-secondary text-sm">
          © {new Date().getFullYear()} SiliconScript. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
