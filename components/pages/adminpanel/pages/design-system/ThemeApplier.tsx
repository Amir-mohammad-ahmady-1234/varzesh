"use client";

import { useEffect } from "react";
import { useDesignStats } from "../../../../../hooks/admin/design-system/useDesignStates";

export default function ThemeApplier() {
  const { currentTheme } = useDesignStats();

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--color-primary", currentTheme.colors.primary);
    root.style.setProperty("--color-secondary", currentTheme.colors.secondary);
    root.style.setProperty("--color-accent", currentTheme.colors.accent);
    root.style.setProperty(
      "--color-background",
      currentTheme.colors.background
    );
    root.style.setProperty(
      "--color-foreground",
      currentTheme.colors.foreground
    );

    root.style.setProperty("--font-family", currentTheme.typography.fontFamily);

    root.style.setProperty("--spacing-sm", currentTheme.spacing.sm);
    root.style.setProperty("--spacing-md", currentTheme.spacing.md);
    root.style.setProperty("--spacing-lg", currentTheme.spacing.lg);
    root.style.setProperty("--spacing-xl", currentTheme.spacing.xl);

    root.style.setProperty("--radius-sm", currentTheme.borderRadius.sm);
    root.style.setProperty("--radius-md", currentTheme.borderRadius.md);
    root.style.setProperty("--radius-lg", currentTheme.borderRadius.lg);
  }, [currentTheme]);

  return null;
}
