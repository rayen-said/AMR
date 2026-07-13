import React, { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
  const mappedVariant = variant === "primary" ? "default" : variant === "secondary" ? "secondary" : "outline";

  if (href) {
    return (
      <Button asChild variant={mappedVariant} size="lg" className={`w-full sm:w-auto ${className}`}>
        <Link href={href}>{children}</Link>
      </Button>
    );
  }

  return (
    <Button variant={mappedVariant} size="lg" className={`w-full sm:w-auto ${className}`} onClick={onClick}>
      {children}
    </Button>
  );
}
