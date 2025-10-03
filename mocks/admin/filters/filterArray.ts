export const filterArray = [
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

export const filterChatRoomArray = [
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
      { name: "فعال", key: "status", value: "active" },
      { name: "غیرفعال", key: "status", value: "inactive" },
    ],
  },
];

export const filterGameArray = [
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
      { name: "دسته بندی شده", key: "status", value: "Scheduled" },
      { name: "پخش شده", key: "status", value: "down" },
      { name: "برخط", key: "status", value: "live" },
    ],
  },
  {
    title: "لیگ",
    items: [
      { name: "دسته یک", key: "League", value: "Acup" },
      { name: "دسته دو", key: "League", value: "Tcup" },
      { name: "دسته سه", key: "League", value: "Dcup" },
    ],
  },
];

export const filterUsersArr = [
  {
    title: "نقش",
    items: [
      { name: "همه", key: "role", value: "all" },
      { name: "ادمین", key: "role", value: "admin" },
      { name: "مدیر", key: "role", value: "owner" },
      { name: "کاربر", key: "role", value: "user" },
    ],
  },
  {
    title: "وضعیت",
    items: [
      { name: "همه", key: "status", value: "all" },
      { name: "فعال", key: "status", value: "active" },
      { name: "غیر فعال", key: "status", value: "not-active" },
      { name: "مسدود", key: "status", value: "ban" },
    ],
  },
];

export const filterBlogArray = [
  {
    title: "مرتب‌ سازی",
    items: [
      { name: "نزولی", key: "sort", value: "desc" },
      { name: "صعودی", key: "sort", value: "asc" },
    ],
  },
  {
    title: "بازدید",
    items: [
      { name: "بالای صد یازدید", key: "view", value: "OverHundred" },
      { name: "بالای هزار بازدید", key: "view", value: "OverThousand" },
      {
        name: "بالای ده هزار بازدید",
        key: "view",
        value: "OverHundredThousand",
      },
    ],
  },
  {
    title: "محبوبیت",
    items: [
      { name: "پاین", key: "Popularity", value: "LOW" },
      { name: "عادی", key: "Popularity", value: "NORMAL" },
      { name: "بالا", key: "Popularity", value: "HIGH" },
    ],
  },
];

export const filterNewsArray = [
  {
    title: "مرتب‌ سازی",
    items: [
      { name: "نزولی", key: "sort", value: "desc" },
      { name: "صعودی", key: "sort", value: "asc" },
    ],
  },
  {
    title: "بازدید",
    items: [
      { name: "بالای صد یازدید", key: "view", value: "OverHundred" },
      { name: "بالای هزار بازدید", key: "view", value: "OverThousand" },
      {
        name: "بالای ده هزار بازدید",
        key: "view",
        value: "OverHundredThousand",
      },
    ],
  },
  {
    title: "وضعیت",
    items: [
      { name: "ساده", key: "Popularity", value: "Simple" },
      { name: "معمولی", key: "Popularity", value: "Medium" },
      { name: "خاص", key: "Popularity", value: "Special" },
    ],
  },
];
