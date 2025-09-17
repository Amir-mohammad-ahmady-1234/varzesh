import React from "react";
import Card from "../../../../styles/ui/Card";

export default function CartContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Card className="mb-6">{children}</Card>;
}
