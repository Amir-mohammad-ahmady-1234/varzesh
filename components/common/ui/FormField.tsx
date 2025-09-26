import type React from "react"
/** UI-only form field wrapper */
interface FormFieldProps {
  label: string
  children: React.ReactNode
  error?: string
  hint?: string
  required?: boolean
  className?: string
}

export default function FormField({ label, children, error, hint, required = false, className = "" }: FormFieldProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <label className="block text-sm font-medium text-(--text-primary)">
        {label}
        {required && <span className="text-(--error) mr-1">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-(--text-muted)">{hint}</p>}
      {error && <p className="text-xs text-(--error)">{error}</p>}
    </div>
  )
}
