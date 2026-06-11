import React from "react";
import Link from "next/link";
import { Sprout } from "lucide-react";

export default function Footer() {
  const links = [
    { name: "Platform Architecture", href: "/platform" },
    { name: "Core Technology", href: "/technology" },
    { name: "Enterprise Solutions", href: "/solutions" },
    { name: "Sustainability Report", href: "/about" },
    { name: "Request Demo / Contact", href: "/contact" }
  ];

  return (
    <footer className="w-full py-12 sm:py-16 lg:py-24 bg-sub-surface border-t border-outline-variant/30">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-5 flex flex-col space-y-4">
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg sm:text-xl text-primary tracking-tight">
            <Sprout className="w-5 h-5 stroke-[2.5]" />
            <span>AMR Solutions</span>
          </Link>
          <p className="text-sm text-text-secondary max-w-sm leading-relaxed">
            Precision engineering for the global food supply. Unifying physical terrain dynamics with agentic intelligence.
          </p>
          <p className="text-xs text-text-secondary pt-2 sm:pt-4">
            © {new Date().getFullYear()} AMR Solutions Inc. All rights reserved.
          </p>
        </div>
        <div className="md:col-span-7 flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-3 md:justify-end md:items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-text-secondary hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
