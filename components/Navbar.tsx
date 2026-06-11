"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sprout } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Platform", href: "/platform" },
    { name: "Solutions", href: "/solutions" },
    { name: "Technology", href: "/technology" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/30">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 flex justify-between items-center h-16 sm:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg sm:text-2xl text-primary tracking-tight shrink-0">
          <Sprout className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          <span className="hidden sm:inline">AMR Solutions</span>
          <span className="inline sm:hidden">AMR</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex space-x-8 xl:space-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-all duration-200 border-b-2 pb-1 ${
                  isActive
                    ? "text-primary border-primary"
                    : "text-text-secondary border-transparent hover:text-primary hover:border-primary/30"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA + theme toggle */}
        <div className="hidden lg:flex items-center space-x-4">
          <ThemeToggle />
          <Link
            href="/contact"
            className="bg-primary text-background font-semibold text-sm px-5 py-2.5 xl:px-6 xl:py-3 rounded hover:bg-primary-hover transition-colors duration-200"
          >
            Request Demo
          </Link>
        </div>

        {/* Mobile / tablet controls */}
        <div className="flex lg:hidden items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-on-surface hover:text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile / tablet nav menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bg-background border-b border-outline-variant/50 shadow-lg z-40 flex flex-col px-4 sm:px-6 py-6 sm:py-8 space-y-5 animate-fade-in max-h-[calc(100vh-4rem)] overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base sm:text-lg font-semibold border-l-4 pl-4 ${
                  isActive ? "text-primary border-primary font-bold" : "text-text-secondary border-transparent"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <hr className="border-outline-variant/30" />
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-primary text-background font-semibold text-base py-3.5 sm:py-4 rounded hover:bg-primary-hover transition-colors duration-200"
          >
            Request Demo
          </Link>
        </div>
      )}
    </nav>
  );
}
