'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            SiliconScript
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-gray-700">
            <Link href="/blog" className="hover:text-black">
              Blogs
            </Link>
            <Link href="/categories" className="hover:text-black">
              Categories
            </Link>
            <Link href="/about" className="hover:text-black">
              About
            </Link>
            <Link href="/contact" className="hover:text-black">
              Contact
            </Link>

            <Link href="/search" className="hover:text-black">
              <Search className="w-5 h-5" />
            </Link>
          </nav>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden pb-4 space-y-4 text-gray-700 animate-fade-in">
            <Link href="/blog" className="block">
              Blogs
            </Link>
            <Link href="/categories" className="block">
              Categories
            </Link>
            <Link href="/about" className="block">
              About
            </Link>
            <Link href="/contact" className="block">
              Contact
            </Link>
            <Link href="/search" className="block items-center gap-2">
              <Search className="w-4 h-4" /> Search
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
