'use client';

import Image from 'next/image';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b-4 border-primary py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 flex-shrink-0 hover:opacity-80 transition">
          <Image
            src="/main-logo.png"
            alt="SKYRANT TECH"
            width={52}
            height={52}
            className="w-12 sm:w-14 h-auto"
          />
          <div className="hidden sm:block">
            <h1 className="brutalist-text text-lg sm:text-xl lg:text-2xl font-black leading-none">
              SKYRANT
            </h1>
            <p className="text-xs text-primary tracking-widest">TECH</p>
          </div>
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
