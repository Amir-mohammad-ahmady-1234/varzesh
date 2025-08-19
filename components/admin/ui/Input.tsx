"use client"

import type React from "react"
import { cn } from "../../../lib/utils"

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string
  error?: string
  helperText?: string
  size?: "sm" | "md" | "lg"
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export default function Input({
  label,
  error,
  helperText,
  size = "md",
  leftIcon,
  rightIcon,
  className = "",
  ...props
}: InputProps) {
  const inputSizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-9 px-3 text-sm",
    lg: "h-11 px-4 text-base",
  }

  const inputClasses = cn(
    "w-full rounded-lg border transition-all duration-200",
    "bg-white dark:bg-gray-900",
    "text-gray-900 dark:text-gray-100",
    "placeholder:text-gray-500 dark:placeholder:text-gray-400",
    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 dark:disabled:bg-gray-800",
    error ? "border-red-300 focus:ring-red-500 dark:border-red-600" : "border-gray-300 dark:border-gray-600",
    leftIcon && "pl-10",
    rightIcon && "pr-10",
    inputSizes[size],
    className,
  )

  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>}
      <div className="relative">
        {leftIcon && <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">{leftIcon}</div>}
        <input className={inputClasses} {...props} />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">{rightIcon}</div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>}
      {helperText && !error && <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{helperText}</p>}
    </div>
  )
}
