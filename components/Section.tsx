import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  bgType?: "default" | "sub" | "green";
  title?: string;
  tagline?: string;
  centeredTitle?: boolean;
}

export default function Section({
  children,
  id,
  className = "",
  bgType = "default",
  title,
  tagline,
  centeredTitle = false,
}: SectionProps) {
  const bgClasses = {
    default: "bg-background text-on-surface",
    sub: "bg-sub-surface text-on-surface",
    green: "bg-primary text-background",
  };

  return (
    <section
      id={id}
      className={`py-16 sm:py-24 lg:py-32 w-full transition-colors duration-300 relative overflow-hidden ${bgClasses[bgType]} ${className}`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 w-full relative z-10">
        {(title || tagline) && (
          <div
            data-reveal
            className={`mb-10 sm:mb-16 md:mb-20 max-w-3xl ${
              centeredTitle ? "mx-auto text-center" : ""
            }`}
          >
            {tagline && (
              <span className={`text-xs font-semibold uppercase tracking-widest block mb-4 ${
                bgType === "green" ? "text-secondary" : "text-primary"
              }`}>
                {tagline}
              </span>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight">
                {title}
              </h2>
            )}
          </div>
        )}

        <div data-reveal className="w-full">
          {children}
        </div>
      </div>
    </section>
  );
}
