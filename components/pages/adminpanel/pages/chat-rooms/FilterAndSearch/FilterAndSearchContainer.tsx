import React from "react";
import Card, { CardContent } from "../../../../../../styles/ui/Card";
import CardHeadTitle from "./CardHeadTitle";
import FilterSortBy from "./FilterSortBy";

export default function FilterAndSearch({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Card className="mb-6">
      <CardHeadTitle />
      <CardContent>
        <div className="space-y-4">
          {children}

          <FilterSortBy />
        </div>
      </CardContent>
    </Card>
  );
}
