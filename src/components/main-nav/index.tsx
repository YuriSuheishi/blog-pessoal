"use client";

import Link from "next/link";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export function MainNav() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="header">
      <div className="container header__container">
        <Link href="/" className="header__logo">
          Home
        </Link>
        <nav className="header__nav">
          <Link href="/blog">Blog</Link>
          <Link href="/about">Sobre</Link>
          <Link href="/contact">Contato</Link>
        </nav>
        <button
          className="header__theme-toggle"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <SunIcon className="header__theme-toggle-icon" />
          ) : (
            <MoonIcon className="header__theme-toggle-icon" />
          )}
        </button>
      </div>
    </header>
  );
}