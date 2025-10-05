"use client";
import { createContext, useContext, ReactNode } from "react";
import { useDesignStats } from "../hooks/admin/design-system/useDesignStates";

const DesignSystemContext = createContext<ReturnType<
  typeof useDesignStats
> | null>(null);

export function DesignSystemProvider({ children }: { children: ReactNode }) {
  const value = useDesignStats();
  return (
    <DesignSystemContext.Provider value={value}>
      {children}
    </DesignSystemContext.Provider>
  );
}

export function useDesignSystem() {
  const context = useContext(DesignSystemContext);
  if (!context) {
    throw new Error(
      "useDesignSystem باید داخل DesignSystemProvider استفاده شود."
    );
  }
  return context;
}
