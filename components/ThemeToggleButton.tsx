'use client';

import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Monitor } from 'lucide-react';

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) {
    return <div className="p-2 w-[34px] h-[34px]" aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-surface/50 text-text-secondary hover:text-primary transition-colors border border-border"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Sun size={18} /> : theme === 'dark' ? <Moon size={18} /> : <Monitor size={18} />}
    </button>
  );
}
