export const supportFilters = [
  {
    title: "مرتب‌ سازی",
    items: [
      { name: "نزولی", key: "sort", value: "desc" },
      { name: "صعودی", key: "sort", value: "asc" },
    ],
  },
  {
    title: "وضعیت",
    items: [
      { name: "بلاک شده", key: "status", value: "Blocked" },
      { name: "درحال تایید", key: "status", value: "Waiting" },
      { name: "تایید شده", key: "status", value: "Approved" },
      { name: "باز", key: "status", value: "Open" },
    ],
  },
  {
    title: "اولویت",
    items: [
      { name: "پاین", key: "priority", value: "LOW" },
      { name: "عادی", key: "priority", value: "NORMAL" },
      { name: "بالا", key: "priority", value: "HIGH" },
      { name: "فوری !", key: "priority", value: "URGENT" },
    ],
  },
];
