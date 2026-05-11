'use client';

import Image from 'next/image';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b-4 border-primary py-3 sm:py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-4">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 sm:gap-3 min-w-0 hover:opacity-80 transition"
        >
          <Image
            src="/main-logo.png"
            alt="SKYRANT TECH"
            width={96}
            height={96}
            className="w-16 h-auto sm:w-20 md:w-24 shrink-0"
            priority
          />
          <span className="brutalist-text text-xs sm:text-base md:text-lg lg:text-xl font-black leading-tight tracking-tight whitespace-nowrap">
            SKYRANT TECH
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 lg:gap-10 ml-auto">
          <a href="#work" className="brutalist-text text-xs lg:text-sm hover:text-accent transition whitespace-nowrap">Work</a>
          <a href="#services" className="brutalist-text text-xs lg:text-sm hover:text-accent transition whitespace-nowrap">Services</a>
          <a href="#team" className="brutalist-text text-xs lg:text-sm hover:text-accent transition whitespace-nowrap">Team</a>
          <a href="#contact" className="brutalist-text text-xs lg:text-sm hover:text-accent transition whitespace-nowrap">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 ml-auto"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t-2 border-primary mt-4 pt-4 flex flex-col gap-4">
          <a href="#work" onClick={() => setMobileMenuOpen(false)} className="brutalist-text text-sm hover:text-accent transition">Work</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="brutalist-text text-sm hover:text-accent transition">Services</a>
          <a href="#team" onClick={() => setMobileMenuOpen(false)} className="brutalist-text text-sm hover:text-accent transition">Team</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="brutalist-text text-sm hover:text-accent transition">Contact</a>
        </nav>
      )}
    </header>
  );
}
