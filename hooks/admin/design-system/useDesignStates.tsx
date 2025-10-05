import { useState } from "react";
import { ThemeConfig } from "../../../types/adminPanelTypes";
import { defaultTheme } from "../../../mocks/admin/design-system/defaultTheme";

export function useDesignStats() {
  const [currentTheme, setCurrentTheme] = useState<ThemeConfig>(defaultTheme);
  const [activeTab, setActiveTab] = useState<
    "colors" | "typography" | "spacing" | "radius" | "preview"
  >("colors");

  const updateTheme = <
    Section extends keyof ThemeConfig,
    Key extends keyof ThemeConfig[Section]
  >(
    section: Section,
    key: Key,
    value: ThemeConfig[Section][Key]
  ) => {
    setCurrentTheme((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  return {
    currentTheme,
    setCurrentTheme,
    activeTab,
    setActiveTab,
    updateTheme,
  };
}
