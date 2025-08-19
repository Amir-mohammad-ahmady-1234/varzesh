"use client";
import { useState, useEffect } from "react";
import type React from "react";

import MainLayout from "../../../components/admin/layout/MainLayout";
import PageHeader from "../../../components/admin/ui/PageHeader";
import Card from "../../../components/admin/ui/Card";
import Button from "../../../components/admin/ui/Button";
import Input from "../../../components/admin/ui/Input";
import Badge from "../../../components/admin/ui/Badge";
import type { ThemeConfig } from "../../../types/adminPanelTypes";
import {
  MdDownload,
  MdUpload,
  MdRefresh,
  MdPalette,
  MdTextFields,
  MdSpaceBar,
  MdRoundedCorner,
  MdPreview,
} from "react-icons/md";
import { cn } from "../../../lib/utils";

const defaultTheme: ThemeConfig = {
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

export default function DesignSystemPage() {
  const [currentTheme, setCurrentTheme] = useState<ThemeConfig>(defaultTheme);
  const [activeTab, setActiveTab] = useState<
    "colors" | "typography" | "spacing" | "radius" | "preview"
  >("colors");

  // Apply theme changes to CSS variables
  useEffect(() => {
    const root = document.documentElement;

    // Apply colors
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

    // Apply typography
    root.style.setProperty("--font-family", currentTheme.typography.fontFamily);

    // Apply spacing (as CSS custom properties for preview)
    root.style.setProperty("--spacing-sm", currentTheme.spacing.sm);
    root.style.setProperty("--spacing-md", currentTheme.spacing.md);
    root.style.setProperty("--spacing-lg", currentTheme.spacing.lg);
    root.style.setProperty("--spacing-xl", currentTheme.spacing.xl);

    // Apply border radius
    root.style.setProperty("--radius-sm", currentTheme.borderRadius.sm);
    root.style.setProperty("--radius-md", currentTheme.borderRadius.md);
    root.style.setProperty("--radius-lg", currentTheme.borderRadius.lg);
  }, [currentTheme]);

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
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1"
          placeholder="#000000"
        />
      </div>
    </div>
  );

  const tabs = [
    { id: "colors", label: "رنگ‌ها", icon: MdPalette },
    { id: "typography", label: "تایپوگرافی", icon: MdTextFields },
    { id: "spacing", label: "فاصله‌گذاری", icon: MdSpaceBar },
    { id: "radius", label: "گردی گوشه‌ها", icon: MdRoundedCorner },
    { id: "preview", label: "پیش‌نمایش", icon: MdPreview },
  ] as const;

  return (
    <MainLayout>
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
              <Button
                variant="outline"
                className="cursor-pointer bg-transparent"
              >
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

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <Card>
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer",
                      activeTab === tab.id
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-accent"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {activeTab === "colors" && (
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
                  onChange={(value) =>
                    updateTheme("colors", "secondary", value)
                  }
                />
                <ColorPicker
                  label="رنگ تاکیدی"
                  value={currentTheme.colors.accent}
                  onChange={(value) => updateTheme("colors", "accent", value)}
                />
                <ColorPicker
                  label="پس‌زمینه"
                  value={currentTheme.colors.background}
                  onChange={(value) =>
                    updateTheme("colors", "background", value)
                  }
                />
                <ColorPicker
                  label="متن اصلی"
                  value={currentTheme.colors.foreground}
                  onChange={(value) =>
                    updateTheme("colors", "foreground", value)
                  }
                />
              </div>
            </Card>
          )}

          {activeTab === "typography" && (
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
                    <Input
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
                    <Input
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
                    <Input
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
                    <Input
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
          )}

          {activeTab === "spacing" && (
            <Card>
              <h2 className="text-xl font-semibold text-foreground mb-6">
                تنظیمات فاصله‌گذاری
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    فاصله کوچک
                  </label>
                  <Input
                    type="text"
                    value={currentTheme.spacing.sm}
                    onChange={(e) =>
                      updateTheme("spacing", "sm", e.target.value)
                    }
                    placeholder="0.5rem"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    فاصله متوسط
                  </label>
                  <Input
                    type="text"
                    value={currentTheme.spacing.md}
                    onChange={(e) =>
                      updateTheme("spacing", "md", e.target.value)
                    }
                    placeholder="1rem"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    فاصله بزرگ
                  </label>
                  <Input
                    type="text"
                    value={currentTheme.spacing.lg}
                    onChange={(e) =>
                      updateTheme("spacing", "lg", e.target.value)
                    }
                    placeholder="1.5rem"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    فاصله خیلی بزرگ
                  </label>
                  <Input
                    type="text"
                    value={currentTheme.spacing.xl}
                    onChange={(e) =>
                      updateTheme("spacing", "xl", e.target.value)
                    }
                    placeholder="2rem"
                  />
                </div>
              </div>
            </Card>
          )}

          {activeTab === "radius" && (
            <Card>
              <h2 className="text-xl font-semibold text-foreground mb-6">
                تنظیمات گردی گوشه‌ها
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    گردی کوچک
                  </label>
                  <Input
                    type="text"
                    value={currentTheme.borderRadius.sm}
                    onChange={(e) =>
                      updateTheme("borderRadius", "sm", e.target.value)
                    }
                    placeholder="0.25rem"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    گردی متوسط
                  </label>
                  <Input
                    type="text"
                    value={currentTheme.borderRadius.md}
                    onChange={(e) =>
                      updateTheme("borderRadius", "md", e.target.value)
                    }
                    placeholder="0.375rem"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    گردی بزرگ
                  </label>
                  <Input
                    type="text"
                    value={currentTheme.borderRadius.lg}
                    onChange={(e) =>
                      updateTheme("borderRadius", "lg", e.target.value)
                    }
                    placeholder="0.5rem"
                  />
                </div>
              </div>
            </Card>
          )}

          {activeTab === "preview" && (
            <div className="space-y-6">
              {/* Buttons Preview */}
              <Card>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  دکمه‌ها
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button>دکمه اصلی</Button>
                  <Button variant="secondary">دکمه ثانویه</Button>
                  <Button variant="outline">دکمه خطی</Button>
                  <Button variant="destructive">دکمه خطرناک</Button>
                  <Button variant="ghost">دکمه شبح</Button>
                </div>
              </Card>

              {/* Inputs Preview */}
              <Card>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  ورودی‌ها
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="ورودی متنی" />
                  <Input type="email" placeholder="ایمیل" />
                  <Input type="password" placeholder="رمز عبور" />
                  <Input disabled placeholder="غیرفعال" />
                </div>
              </Card>

              {/* Cards Preview */}
              <Card>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  کارت‌ها
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <h4 className="font-semibold text-foreground mb-2">
                      کارت نمونه
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      این یک کارت نمونه است که نحوه نمایش محتوا را نشان می‌دهد.
                    </p>
                  </Card>
                  <Card>
                    <h4 className="font-semibold text-foreground mb-2">
                      کارت دیگر
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      کارت دوم برای نمایش تنوع در طراحی.
                    </p>
                  </Card>
                </div>
              </Card>

              {/* Badges Preview */}
              <Card>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  نشان‌ها
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>پیش‌فرض</Badge>
                  <Badge variant="secondary">ثانویه</Badge>
                  <Badge variant="info">خطی</Badge>
                  <Badge variant="error">خطرناک</Badge>
                </div>
              </Card>

              {/* Typography Preview */}
              <Card>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  تایپوگرافی
                </h3>
                <div className="space-y-3">
                  <h1 className="text-3xl font-bold text-foreground">
                    عنوان اصلی (H1)
                  </h1>
                  <h2 className="text-2xl font-semibold text-foreground">
                    عنوان ثانویه (H2)
                  </h2>
                  <h3 className="text-xl font-medium text-foreground">
                    عنوان سوم (H3)
                  </h3>
                  <p className="text-base text-foreground">
                    این یک پاراگراف نمونه است که نحوه نمایش متن عادی را نشان
                    می‌دهد.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    متن کوچک‌تر با رنگ کم‌رنگ‌تر برای اطلاعات تکمیلی.
                  </p>
                </div>
              </Card>

              {/* Table Preview */}
              <Card>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  جدول
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-right py-2 px-4 font-semibold text-foreground">
                          نام
                        </th>
                        <th className="text-right py-2 px-4 font-semibold text-foreground">
                          وضعیت
                        </th>
                        <th className="text-right py-2 px-4 font-semibold text-foreground">
                          تاریخ
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 text-foreground">علی احمدی</td>
                        <td className="py-2 px-4">
                          <Badge variant="secondary">فعال</Badge>
                        </td>
                        <td className="py-2 px-4 text-muted-foreground">
                          ۱۴۰۳/۱۰/۳۰
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-4 text-foreground">
                          فاطمه محمدی
                        </td>
                        <td className="py-2 px-4">
                          <Badge>فعال</Badge>
                        </td>
                        <td className="py-2 px-4 text-muted-foreground">
                          ۱۴۰۳/۱۰/۲۹
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
