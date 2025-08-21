"use client"

import type React from "react"
import { useEffect } from "react"
import { FiX } from "react-icons/fi"
import { cn } from "../../lib/utils"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
  size?: "sm" | "md" | "lg" | "xl" | "full"
  className?: string
  closeOnOverlayClick?: boolean
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  size = "md",
  className = "",
  closeOnOverlayClick = true,
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose()
      }
      document.addEventListener("keydown", handleEscape)
      return () => {
        document.body.style.overflow = "unset"
        document.removeEventListener("keydown", handleEscape)
      }
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-[95vw] max-h-[95vh]",
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={closeOnOverlayClick ? onClose : undefined}
      />

      {/* Modal Content */}
      <div
        className={cn(
          "relative w-full bg-white dark:bg-gray-800 rounded-xl shadow-xl",
          "border border-gray-200 dark:border-gray-700",
          "transform transition-all duration-200 scale-100",
          "max-h-[90vh] overflow-hidden flex flex-col",
          sizeClasses[size],
          className,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h2>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="بستن"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">{children}</div>
      </div>
    </div>
  )
}
