import { Option } from "../../../components/common/admin/rowsList/Cart";

export function useGameHandlers() {
  function getCartColor(options: Option[]) {
    options.map((option) => {
      option.items.map((item) => {
        const priority = item.value;
        switch (priority) {
          case "URGENT":
          case "live":
            return "#dc2626";
          case "HIGH":
          case "down":
            return "#ea580c";
          case "LOW":
          case "Scheduled":
            return "#ca8a04";
          default:
            return "#16a34a";
        }
      });
    });
  }

  return { getCartColor };
}
