import { Option } from "../components/common/admin/rowsList/Cart";

export function getCartColor(options: Option[]) {
  const option = options[0];
  const priority = option.items.value;
  switch (priority) {
    case "Blocked":
    case "live":
      return "#dc2626";
    case "Open":
    case "down":
      return "#ea580c";
    case "Waiting":
    case "Scheduled":
      return "#ca8a04";
    default:
      return "#16a34a";
  }
}
