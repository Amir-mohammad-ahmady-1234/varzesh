"use client";

import React from "react";
import PageHeader from "../../../../common/ui/PageHeader";
import Button from "../../../../common/Button";
import { MdDownload, MdRefresh, MdUpload } from "react-icons/md";
import { defaultTheme } from "../../../../../mocks/admin/design-system/defaultTheme";
import { useDesignSystem } from "../../../../../context/DesignSystemContext";

export default function PageTitle() {
  const { currentTheme, setCurrentTheme } = useDesignSystem();

  const exportTheme = () => {
    const themeJson = JSON.stringify(currentTheme, null, 2);
    const blob = new Blob([themeJson], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `theme-${new Date().toISOString().split("T")[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const importTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedTheme = JSON.parse(e.target?.result as string);
        setCurrentTheme(importedTheme);
      } catch (error) {
        console.log(error);
        alert("خطا در خواندن فایل تم");
      }
    };
    reader.readAsText(file);
  };

  const resetTheme = () => {
    setCurrentTheme(defaultTheme);
  };

  return (
    <PageHeader
      title="سیستم طراحی"
      description="شخصی‌سازی رنگ‌ها، فونت‌ها و سایر المان‌های طراحی"
      action={
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={resetTheme}
            className="cursor-pointer bg-transparent"
          >
            <MdRefresh className="w-4 h-4 ml-2" />
            بازنشانی
          </Button>
          <Button
            variant="outline"
            onClick={exportTheme}
            className="cursor-pointer bg-transparent"
          >
            <MdDownload className="w-4 h-4 ml-2" />
            خروجی
          </Button>
          <label className="cursor-pointer">
            <Button variant="outline" className="cursor-pointer bg-transparent">
              <MdUpload className="w-4 h-4 ml-2" />
              ورودی
            </Button>
            <input
              type="file"
              accept=".json"
              onChange={importTheme}
              className="hidden"
            />
          </label>
        </div>
      }
    />
  );
}
