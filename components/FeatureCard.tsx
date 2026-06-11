"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  specs?: string[];
  number?: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  specs,
  number,
  className = "",
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`hairline-border bg-surface-container-lowest p-6 sm:p-8 rounded-lg relative overflow-hidden group flex flex-col justify-between shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_-6px_rgba(61,122,78,0.06)] dark:hover:shadow-[0_12px_30px_-6px_rgba(111,175,118,0.08)] ${className}`}
    >
      <div>
        {/* Number & Icon Header */}
        <div className="flex justify-between items-start mb-8">
          {number ? (
            <span className="text-4xl font-bold tracking-tight text-on-surface/10 group-hover:text-primary/10 transition-colors duration-300">
              {number}
            </span>
          ) : (
            <div className="w-10 h-10" />
          )}
          {icon && (
            <div className="p-3 bg-sub-surface text-primary rounded-lg group-hover:bg-primary group-hover:text-background transition-all duration-300">
              {icon}
            </div>
          )}
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-on-surface mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-text-secondary mb-6">
          {description}
        </p>
      </div>

      {/* Tech Specifications */}
      {specs && specs.length > 0 && (
        <div className="mt-4 pt-4 border-t border-outline-variant/30">
          <span className="text-[10px] font-bold tracking-widest text-primary uppercase block mb-3">
            Specifications
          </span>
          <ul className="space-y-2">
            {specs.map((spec, i) => (
              <li key={i} className="text-xs text-text-secondary flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 shrink-0" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}
