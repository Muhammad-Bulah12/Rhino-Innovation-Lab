"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
          {/* Mobile Logo */}
          <div className="md:hidden relative h-12 w-40">
            <Image
              src="/RhinoLab-MView-logo.png"
              alt="Rhino Innovation Lab"
              fill
              className="object-contain object-left"
              priority
            />
          </div>

          {/* Desktop Logo */}
          <div className="hidden md:block relative h-12 w-48">
            <Image
              src="/RhinoLab-DView-logo.png"
              alt="Rhino Innovation Lab"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="header-link">
            Home
          </Link>
          <Link href="/about" className="header-link">
            About Us
          </Link>
          <Link href="/programs" className="header-link">
            Programs
          </Link>
          <Link href="/trainings" className="header-link">
            Trainings
          </Link>
          <Link href="/team" className="header-link">
            Team
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 bg-primary text-white text-sm font-bold rounded hover:bg-black/80 transition-colors"
          >
            Get Involved
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-secondary hover:text-primary transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            // Close Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            <Link
              href="/"
              className="px-4 py-3 text-foreground hover:bg-gray-50 hover:text-primary rounded transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-4 py-3 text-foreground hover:bg-gray-50 hover:text-primary rounded transition-colors"
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link
              href="/programs"
              className="px-4 py-3 text-foreground hover:bg-gray-50 hover:text-primary rounded transition-colors"
              onClick={closeMenu}
            >
              Programs
            </Link>
            <Link
              href="/trainings"
              className="px-4 py-3 text-foreground hover:bg-gray-50 hover:text-primary rounded transition-colors"
              onClick={closeMenu}
            >
              Trainings
            </Link>
            <Link
              href="/team"
              className="px-4 py-3 text-foreground hover:bg-gray-50 hover:text-primary rounded transition-colors"
              onClick={closeMenu}
            >
              Team
            </Link>
            <Link
              href="/contact"
              className="mx-4 mt-2 px-4 py-3 bg-primary text-white text-center font-bold rounded hover:bg-black/80 transition-colors"
              onClick={closeMenu}
            >
              Get Involved
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
