"use client";

import type React from "react";
import { cn } from "../../../lib/utils";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  size?: "sm" | "md" | "lg" | "xl";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type?: string;
  variant?: "primary" | "secondary";
  name?: string;
  value?: string;
}

export default function InputDesign({
  label,
  error,
  helperText,
  size = "md",
  leftIcon,
  rightIcon,
  className = "",
  type = "input",
  variant = "primary",
  name,
  value,
  ...props
}: InputProps) {
  const inputSizes = {
    sm: "px-[0.6rem] py-[0.35rem] text-[0.85rem]",
    md: "px-[0.75rem] py-[0.5rem] text-[1rem]",
    lg: "px-[1rem] py-[0.75rem] text-[1.15rem]",
    xl: "px-[1.25rem] py-[1rem] text-[1.3rem]",
  };

  const inputClasses = cn(
    "w-full px-[0.75rem] py-[0.5rem] text-right rounded-medium border font-IRANYekan transition-all duration-200 ease-in-out",
    "focus:outline-none focus:shadow-[0_0_0_2px_rgba(0,119,255,0.2)]",
    error ? "border-error-500 bg-[rgba(255,0,0,0.05)]" : "border-neutral-300",
    leftIcon ? "pl-10" : "",
    rightIcon ? "pr-10" : "",
    inputSizes[size],
    className
  );

  const variants = {
    primary: "border-primary-100 focus:border-primary-200",
    secondary: "border-secondary-100 focus:border-secondary-200",
  };

  return (
    <div className="w-full">
      {label && (
        <label
          className="block text-sm font-IRANYekan text-neutral-600 mb-1"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
            {leftIcon}
          </div>
        )}
        {value === undefined || type === "file" ? (
          <input
            id={name}
            name={name}
            type={type}
            className={cn(inputClasses, variants[variant])}
            {...props}
          />
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            className={cn(inputClasses, variants[variant])}
            value={value}
            {...props}
          />
        )}
        {rightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
            {rightIcon}
          </div>
        )}
      </div>
      {error && <p className="text-error-500 text-sm">{error}</p>}
      {helperText && !error && (
        <p className="mt-1 text-sm text-neutral-500">{helperText}</p>
      )}
    </div>
  );
}
