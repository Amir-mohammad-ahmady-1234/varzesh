"use client";

import type React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "destructive" | "outline";
  size?: "sm" | "md" | "lg";
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
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 bg-bg-primary",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
    "cursor-pointer select-none",
    "shadow-sm hover:shadow-md active:scale-[0.98]"
  );

  const variants = {
    primary:
      "bg-bg-primary text-white hover:bg-blue-700 active:bg-blue-800 shadow-blue-200/50",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 border border-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 dark:border-gray-700",
    outline:
      "bg-transparent text-gray-700 hover:bg-gray-50 active:bg-gray-100 border border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800 dark:border-gray-600",
    ghost:
      "bg-transparent text-gray-700 hover:bg-gray-100 active:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800",
    destructive:
      "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 shadow-red-200/50",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm h-8",
    md: "px-4 py-2 text-sm h-9",
    lg: "px-6 py-3 text-base h-11",
  };

  return (
    <button
      type={type}
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      onClick={onClick}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
    >
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
      {children}
    </button>
  );
}
