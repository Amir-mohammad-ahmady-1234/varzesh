interface CatType {
  name: string;
  key: string;
  value: string;
}

interface AuthorType {
  name: string;
  key: string;
  value: string;
}

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
      { name: "ادمین", key: "role", value: "ADMIN" },
      { name: "کاربر", key: "role", value: "USER" },
    ],
  },
  {
    title: "وضعیت",
    items: [
      { name: "باز", key: "status", value: "Open" },
      { name: "در حال برسی", key: "status", value: "Waiting" },
      { name: "قبول شده", key: "status", value: "Approved" },
      { name: "مسدود", key: "status", value: "Blocked" },
    ],
  },
];

export function filterBlogArray(
  categoryItems: CatType[],
  authorItems: AuthorType[]
) {
  return [
    {
      title: "مرتب‌ سازی",
      items: [
        { name: "نزولی", key: "sort", value: "desc" },
        { name: "صعودی", key: "sort", value: "asc" },
      ],
    },
    {
      title: "دسته بندی",
      items: categoryItems,
    },
    {
      title: "نویسنده",
      items: authorItems,
    },
  ];
}

export const filterNewsArray = [
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
      { name: "ساده", key: "status", value: "Simple" },
      { name: "معمولی", key: "status", value: "Medium" },
      { name: "خاص", key: "status", value: "Special" },
    ],
  },
];
