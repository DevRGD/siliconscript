'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search } from 'lucide-react';
import ThemeToggleButton from './ThemeToggleButton';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border bg-surface/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold tracking-tight text-primary">
            SiliconScript
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-text-secondary font-medium">
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blogs
            </Link>
            <Link href="/categories" className="hover:text-primary transition-colors">
              Categories
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>

            <Link href="/search" className="hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </Link>

            <div className="ml-2 pl-2 border-l border-border">
              <ThemeToggleButton />
            </div>
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggleButton />
            <button onClick={() => setOpen(!open)} className="text-text-secondary hover:text-primary">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="md:hidden pb-4 space-y-4 text-text-secondary border-t border-border mt-2 pt-4 bg-surface">
            <Link href="/blog" className="block hover:text-primary">
              Blogs
            </Link>
            <Link href="/categories" className="block hover:text-primary">
              Categories
            </Link>
            <Link href="/about" className="block hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="block hover:text-primary">
              Contact
            </Link>
            <Link href="/search" className="flex items-center gap-2 hover:text-primary">
              <Search className="w-4 h-4" /> Search
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
