"use client";

import React from "react";
import Card from "../../../../common/ui/Card";

import {
  MdPalette,
  MdTextFields,
  MdSpaceBar,
  MdRoundedCorner,
  MdPreview,
} from "react-icons/md";
import { cn } from "../../../../../lib/utils";
import { useDesignSystem } from "../../../../../context/DesignSystemContext";

const tabs = [
  { id: "colors", label: "رنگ‌ها", icon: MdPalette },
  { id: "typography", label: "تایپوگرافی", icon: MdTextFields },
  { id: "spacing", label: "فاصله‌گذاری", icon: MdSpaceBar },
  { id: "radius", label: "گردی گوشه‌ها", icon: MdRoundedCorner },
  { id: "preview", label: "پیش‌نمایش", icon: MdPreview },
] as const;

export default function DesignOptions() {
  const { activeTab, setActiveTab } = useDesignSystem();

  return (
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
  );
}
