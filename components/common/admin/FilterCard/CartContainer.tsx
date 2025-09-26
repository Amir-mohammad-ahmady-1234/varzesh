import React from "react";
import Card from "../../ui/Card";

export default function CartContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Card className="mb-6">{children}</Card>;
}
