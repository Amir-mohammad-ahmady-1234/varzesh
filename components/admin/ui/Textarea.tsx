"use client"

import type React from "react"

/** UI-only textarea component */
interface TextareaProps {
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
  disabled?: boolean
  required?: boolean
  rows?: number
}

export default function Textarea({
  placeholder,
  value,
  onChange,
  className = "",
  disabled = false,
  required = false,
  rows = 3,
}: TextareaProps) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      rows={rows}
      className={`w-full px-3 py-2 border border-(--border) rounded-(--radius) bg-(--bg-primary) text-(--text-primary) placeholder-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed resize-vertical ${className}`}
    />
  )
}
