import { Option } from "../components/common/admin/rowsList/Cart";

export function getCartColor(options: Option[]) {
  const option = options.find((option) => option.title === "status");
  const priority = option?.items.value;
  switch (priority) {
    case "Blocked":
    case "live":
    case "OverHundred":
      return "#dc2626";
    case "Open":
    case "down":
    case "OverThousand":
      return "#ea580c";
    case "Waiting":
    case "Scheduled":
    case "OverHundredThousand":
      return "#ca8a04";
    default:
      return "#16a34a";
  }
}
