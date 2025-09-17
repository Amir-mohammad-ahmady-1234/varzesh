import Link from "next/link";
import Button from "../../../common/Button";
import { JSX } from "react";

interface Props {
  item: {
    href: string;
    label: string;
    icon: JSX.Element;
  };
  pathname: string;
}

export default function Items({ item, pathname }: Props) {
  const isActive = pathname.startsWith(item.href);

  return (
    <div className="flex items-center" key={item.href}>
      {item.icon}
      <Button
        className={`hover:text-primary-100 ${isActive && "text-primary-100"}`}
        variant="ghost"
        size="md"
      >
        <Link href={item.href}>{item.label}</Link>
      </Button>
    </div>
  );
}
