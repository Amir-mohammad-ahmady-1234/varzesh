import Link from "next/link";
import Button from "../../../../styles/ui/Button";
import { IconType } from "react-icons/lib";

interface Props {
  item: {
    href: string;
    lable: string;
    icon: IconType;
  };
  pathname: string;
}

export default function Items({ item, pathname }: Props) {
  const isActive = pathname === item.href;

  console.log(pathname);

  return (
    <div className="flex items-center" key={item.href}>
      <item.icon />
      <Button
        className={`hover:text-primary-100 ${isActive && "text-primary-100"}`}
        variant="ghost"
        size="md"
      >
        <Link href={item.href}>{item.lable}</Link>
      </Button>
    </div>
  );
}
