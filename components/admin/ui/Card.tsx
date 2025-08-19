"use client"

import type React from "react"
import { cn } from "../../../lib/utils"

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: "none" | "sm" | "md" | "lg"
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className = "", hover = false, padding = "md" }: CardProps) {
  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  }

  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700",
        "shadow-sm transition-all duration-200",
        hover && "hover:shadow-md hover:-translate-y-0.5 cursor-pointer",
        paddingClasses[padding],
        className,
      )}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return <div className={cn("flex flex-col space-y-1.5 pb-4", className)}>{children}</div>
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={cn("", className)}>{children}</div>
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return <div className={cn("flex items-center pt-4", className)}>{children}</div>
}

export function CardTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h3 className={cn("text-lg font-semibold text-gray-900 dark:text-gray-100", className)}>{children}</h3>
}

export function CardDescription({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("text-sm text-gray-600 dark:text-gray-400", className)}>{children}</p>
}
