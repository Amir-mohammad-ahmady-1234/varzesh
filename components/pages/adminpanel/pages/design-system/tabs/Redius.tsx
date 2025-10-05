import React from "react";
import Card from "../../../../../common/ui/Card";
import { useDesignSystem } from "../../../../../../context/DesignSystemContext";

export default function Redius() {
  const { currentTheme, updateTheme } = useDesignSystem();

  return (
    <Card>
      <h2 className="text-xl font-semibold text-foreground mb-6">
        تنظیمات گردی گوشه‌ها
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            گردی کوچک
          </label>
          <input
            type="text"
            value={currentTheme.borderRadius.sm}
            onChange={(e) => updateTheme("borderRadius", "sm", e.target.value)}
            placeholder="0.25rem"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            گردی متوسط
          </label>
          <input
            type="text"
            value={currentTheme.borderRadius.md}
            onChange={(e) => updateTheme("borderRadius", "md", e.target.value)}
            placeholder="0.375rem"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            گردی بزرگ
          </label>
          <input
            type="text"
            value={currentTheme.borderRadius.lg}
            onChange={(e) => updateTheme("borderRadius", "lg", e.target.value)}
            placeholder="0.5rem"
          />
        </div>
      </div>
    </Card>
  );
}
