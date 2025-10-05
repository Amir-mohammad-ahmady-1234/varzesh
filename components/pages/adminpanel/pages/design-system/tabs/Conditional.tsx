"use client";

import React from "react";
import ColorsTab from "./ColorsTab";
import TypographyTab from "./TypographyTab";
import SpacingTab from "./SpacingTab";
import Redius from "./Redius";
import PreviewTab from "./PreviewTab";
import { useDesignSystem } from "../../../../../../context/DesignSystemContext";

export default function Conditional() {
  const { activeTab } = useDesignSystem();

  return (
    <div className="lg:col-span-3">
      {activeTab === "colors" && <ColorsTab />}

      {activeTab === "typography" && <TypographyTab />}

      {activeTab === "spacing" && <SpacingTab />}

      {activeTab === "radius" && <Redius />}

      {activeTab === "preview" && <PreviewTab />}
    </div>
  );
}
