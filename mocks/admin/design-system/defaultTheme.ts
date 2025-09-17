import { ThemeConfig } from "../../../types/adminPanelTypes";

export const defaultTheme: ThemeConfig = {
  colors: {
    primary: "#0f172a",
    secondary: "#f8fafc",
    accent: "#f8fafc",
    background: "#ffffff",
    foreground: "#0f172a",
  },
  typography: {
    fontFamily: "Vazirmatn",
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
    },
  },
  spacing: {
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
  },
};