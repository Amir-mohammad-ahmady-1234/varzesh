import type React from "react";

import MainLayout from "../../../components/pages/adminpanel/layout/MainLayout";
import PageTitle from "../../../components/pages/adminpanel/pages/design-system/PageTitle";
import DesignOptions from "../../../components/pages/adminpanel/pages/design-system/DesignOptions";
import Conditional from "../../../components/pages/adminpanel/pages/design-system/tabs/Conditional";
import ThemeApplier from "../../../components/pages/adminpanel/pages/design-system/ThemeApplier";

export default function DesignSystemPage() {
  return (
    <MainLayout>
      <ThemeApplier />
      <PageTitle />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <DesignOptions />

        <Conditional />
      </div>
    </MainLayout>
  );
}
