"use client";

import type React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "destructive" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  type = "button",
  loading = false,
}: ButtonProps) {
  const baseClasses = cn(
    `font-IRANYekan font-semibold 
    rounded-extrasmall disabled:bg-neutral-600
    px-6 py-2 
    border-2 border-transparent 
    cursor-pointer 
    inline-flex items-center justify-center 
    gap-2 
    transition-all duration-150 ease-in-out`
  );

  const variants = {
    primary:
      "bg-primary-100 text-neutral-200 border border-transparent transition-all duration-150 ease-in-out hover:border-primary-100 hover:text-neutral-200 hover:bg-transparent active:bg-primary-100 active:translate-y-[2px] active:scale-[0.98] active:opacity-90",
    secondary:
      "bg-secondary-100 text-neutral-200 border border-transparent transition-all duration-150 ease-in-out hover:bg-transparent hover:text-secondary-100 hover:border-secondary-100 active:translate-y-[2px] active:scale-[0.98] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] active:bg-secondary-100",
    outline:
      "bg-transparent text-gray-700 hover:bg-gray-50 active:bg-gray-100 border border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800 dark:border-gray-600",
    ghost:
      "bg-transparent text-gray-700 hover:bg-gray-100 active:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800",
    destructive:
      "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 shadow-red-200/50",
  };

  const sizes = {
    sm: "px-[1rem] py-[0.4rem] text-[0.85rem]",
    md: "px-[1.5rem] py-[0.6rem] text-[1rem]",
    lg: "px-[2rem] py-[0.8rem] text-[1.15rem]",
    xl: "px-[2.5rem] py-[1rem] text-[1.5rem]",
  };

  return (
    <button
      type={type}
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      onClick={onClick}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
    >
      {children}
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
    </button>
  );
}
