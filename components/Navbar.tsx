"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Product", href: "/product", match: ["/product"] },
  { name: "About", href: "/about", match: ["/about"] },
  { name: "Journal", href: "/blog", match: ["/blog"] },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isTactical = pathname === "/" || ["/product", "/about", "/blog", "/contact"].some((route) => pathname.startsWith(route));

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${isTactical ? "border-white/12 bg-[#050b08]/88 text-white" : "border-outline-variant/60 bg-background/88"}`}>
      <div className="mx-auto flex h-18 max-w-[1400px] items-center justify-between px-4 sm:h-22 sm:px-8 lg:px-12">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="AMR Solutions home">
          <span className={`flex size-10 items-center justify-center overflow-hidden shadow-sm ring-1 ${isTactical ? "rounded-none ring-white/20" : "rounded-xl ring-primary/10"}`}>
            <Image src="/brand/logo.svg" alt="" width={52} height={52} className="size-12 object-cover" />
          </span>
          <span className={`display-type text-base font-extrabold tracking-[-0.03em] sm:text-lg ${isTactical ? "text-white" : "text-on-surface"}`}>AMR <span className={isTactical ? "text-[#c8ff45]" : "text-primary"}>Solutions</span></span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navLinks.map((link) => {
            const active = link.match.some((path) => pathname.startsWith(path));
            return (
              <Link key={link.name} href={link.href} className={`relative py-2 text-sm font-bold transition-colors ${isTactical ? active ? "text-[#c8ff45]" : "text-white/58 hover:text-white" : active ? "text-primary" : "text-text-secondary hover:text-on-surface"}`}>
                {link.name}
                {active && !isTactical && <span className="absolute inset-x-0 -bottom-0.5 mx-auto h-1 w-1 rounded-full bg-secondary" />}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle className={isTactical ? "dark:!text-white dark:hover:!bg-white/10 dark:hover:!text-[#c8ff45]" : ""} />
          <Button asChild size="default" className={isTactical ? "rounded-none bg-[#c8ff45] text-[#050b08] shadow-none hover:bg-[#dcff83]" : ""}>
            <Link href="/contact">Use contact form <ArrowUpRight className="size-4" /></Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle className={isTactical ? "dark:!text-white dark:hover:!bg-white/10 dark:hover:!text-[#c8ff45]" : ""} />
          <Button variant="ghost" size="icon" className={isTactical ? "rounded-none text-white hover:bg-white/10 hover:text-[#c8ff45]" : ""} onClick={() => setIsOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={isOpen}>
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className={`border-t px-5 py-6 shadow-2xl lg:hidden ${isTactical ? "border-white/12 bg-[#050b08]" : "border-outline-variant/60 bg-background"}`}>
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className={`px-4 py-3 text-base font-bold ${isTactical ? "text-white/70 hover:bg-white/8 hover:text-[#c8ff45]" : "rounded-2xl text-on-surface hover:bg-primary/8 hover:text-primary"}`}>
                {link.name}
              </Link>
            ))}
            <Button asChild size="lg" className={`mt-4 w-full ${isTactical ? "rounded-none bg-[#c8ff45] text-[#050b08]" : ""}`}>
              <Link href="/contact" onClick={() => setIsOpen(false)}>Use contact form <ArrowUpRight className="size-4" /></Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
