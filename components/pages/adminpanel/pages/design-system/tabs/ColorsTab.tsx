import React from "react";
import Card from "../../../../../common/ui/Card";
import { useDesignSystem } from "../../../../../../context/DesignSystemContext";

export default function ColorsTab() {
  const { currentTheme, updateTheme } = useDesignSystem();

  const ColorPicker = ({
    label,
    value,
    onChange,
  }: {
    label: string;
    value: string;
    onChange: (value: string) => void;
  }) => (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <div className="flex gap-2">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-12 h-10 rounded border border-border cursor-pointer"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1"
          placeholder="#000000"
        />
      </div>
    </div>
  );

  return (
    <Card>
      <h2 className="text-xl font-semibold text-foreground mb-6">
        تنظیمات رنگ
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ColorPicker
          label="رنگ اصلی"
          value={currentTheme.colors.primary}
          onChange={(value) => updateTheme("colors", "primary", value)}
        />
        <ColorPicker
          label="رنگ ثانویه"
          value={currentTheme.colors.secondary}
          onChange={(value) => updateTheme("colors", "secondary", value)}
        />
        <ColorPicker
          label="رنگ تاکیدی"
          value={currentTheme.colors.accent}
          onChange={(value) => updateTheme("colors", "accent", value)}
        />
        <ColorPicker
          label="پس‌زمینه"
          value={currentTheme.colors.background}
          onChange={(value) => updateTheme("colors", "background", value)}
        />
        <ColorPicker
          label="متن اصلی"
          value={currentTheme.colors.foreground}
          onChange={(value) => updateTheme("colors", "foreground", value)}
        />
      </div>
    </Card>
  );
}
