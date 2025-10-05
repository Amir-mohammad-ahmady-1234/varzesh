import React from "react";
import Card from "../../../../../common/ui/Card";
import { useDesignSystem } from "../../../../../../context/DesignSystemContext";

export default function TypographyTab() {
  const { currentTheme, updateTheme } = useDesignSystem();

  return (
    <Card>
      <h2 className="text-xl font-semibold text-foreground mb-6">
        تنظیمات تایپوگرافی
      </h2>
      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            فونت اصلی
          </label>
          <select
            value={currentTheme.typography.fontFamily}
            onChange={(e) =>
              updateTheme("typography", "fontFamily", e.target.value)
            }
            className="w-full p-2 border border-border rounded-lg bg-background text-foreground cursor-pointer"
          >
            <option value="Vazirmatn">وزیرمتن</option>
            <option value="IranYekan">ایران یکان</option>
            <option value="Tahoma">تاهوما</option>
            <option value="Arial">Arial</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              اندازه کوچک
            </label>
            <input
              type="text"
              value={currentTheme.typography.fontSize.sm}
              onChange={(e) =>
                updateTheme("typography", "fontSize", {
                  ...currentTheme.typography.fontSize,
                  sm: e.target.value,
                })
              }
              placeholder="0.875rem"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              اندازه پایه
            </label>
            <input
              type="text"
              value={currentTheme.typography.fontSize.base}
              onChange={(e) =>
                updateTheme("typography", "fontSize", {
                  ...currentTheme.typography.fontSize,
                  base: e.target.value,
                })
              }
              placeholder="1rem"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              اندازه بزرگ
            </label>
            <input
              type="text"
              value={currentTheme.typography.fontSize.lg}
              onChange={(e) =>
                updateTheme("typography", "fontSize", {
                  ...currentTheme.typography.fontSize,
                  lg: e.target.value,
                })
              }
              placeholder="1.125rem"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              اندازه خیلی بزرگ
            </label>
            <input
              type="text"
              value={currentTheme.typography.fontSize.xl}
              onChange={(e) =>
                updateTheme("typography", "fontSize", {
                  ...currentTheme.typography.fontSize,
                  xl: e.target.value,
                })
              }
              placeholder="1.25rem"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
