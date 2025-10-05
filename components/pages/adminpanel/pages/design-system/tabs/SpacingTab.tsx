import React from "react";
import Card from "../../../../../common/ui/Card";
import { useDesignSystem } from "../../../../../../context/DesignSystemContext";

export default function SpacingTab() {
  const { currentTheme, updateTheme } = useDesignSystem();

  return (
    <Card>
      <h2 className="text-xl font-semibold text-foreground mb-6">
        تنظیمات فاصله‌گذاری
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            فاصله کوچک
          </label>
          <input
            type="text"
            value={currentTheme.spacing.sm}
            onChange={(e) => updateTheme("spacing", "sm", e.target.value)}
            placeholder="0.5rem"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            فاصله متوسط
          </label>
          <input
            type="text"
            value={currentTheme.spacing.md}
            onChange={(e) => updateTheme("spacing", "md", e.target.value)}
            placeholder="1rem"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            فاصله بزرگ
          </label>
          <input
            type="text"
            value={currentTheme.spacing.lg}
            onChange={(e) => updateTheme("spacing", "lg", e.target.value)}
            placeholder="1.5rem"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            فاصله خیلی بزرگ
          </label>
          <input
            type="text"
            value={currentTheme.spacing.xl}
            onChange={(e) => updateTheme("spacing", "xl", e.target.value)}
            placeholder="2rem"
          />
        </div>
      </div>
    </Card>
  );
}
