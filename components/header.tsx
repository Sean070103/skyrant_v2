'use client';

import Image from 'next/image';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b-2 border-primary py-1 sm:py-1.5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-3">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-1.5 sm:gap-2 min-w-0 hover:opacity-80 transition"
        >
          <Image
            src="/main-logo.png"
            alt="SKYRANT TECH"
            width={96}
            height={96}
            className="w-11 h-auto sm:w-12 md:w-14 shrink-0"
            priority
          />
          {/* Skip brutalist-text here — it uses tracking-widest and stretches the wordmark */}
          <span className="font-mono uppercase text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-black leading-none tracking-tight whitespace-nowrap">
            SKYRANT TECH
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-5 lg:gap-8 ml-auto">
          <a href="#work" className="brutalist-text text-xs lg:text-sm hover:text-accent transition whitespace-nowrap">Work</a>
          <a href="#services" className="brutalist-text text-xs lg:text-sm hover:text-accent transition whitespace-nowrap">Services</a>
          <a href="#team" className="brutalist-text text-xs lg:text-sm hover:text-accent transition whitespace-nowrap">Team</a>
          <a href="#contact" className="brutalist-text text-xs lg:text-sm hover:text-accent transition whitespace-nowrap">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1 ml-auto py-0.5"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-primary transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-primary transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-primary transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t-2 border-primary mt-2 pt-3 flex flex-col gap-3">
          <a href="#work" onClick={() => setMobileMenuOpen(false)} className="brutalist-text text-sm hover:text-accent transition">Work</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="brutalist-text text-sm hover:text-accent transition">Services</a>
          <a href="#team" onClick={() => setMobileMenuOpen(false)} className="brutalist-text text-sm hover:text-accent transition">Team</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="brutalist-text text-sm hover:text-accent transition">Contact</a>
        </nav>
      )}
    </header>
  );
}
