"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface CTAButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function CTAButton({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold text-sm px-6 sm:px-8 py-3 sm:py-4 rounded-md tracking-wide transition-all duration-200 cursor-pointer shadow-sm w-full sm:w-auto";

  const variantClasses = {
    primary: "bg-primary text-background hover:bg-primary-hover",
    secondary: "bg-secondary text-background hover:opacity-90",
    outline:
      "hairline-border bg-transparent text-primary hover:bg-sub-surface border-primary/20",
  };

  const buttonContent = (
    <motion.span
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block w-full sm:w-auto">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
}
