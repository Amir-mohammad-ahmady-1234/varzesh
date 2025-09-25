export const getRoleColor = (role: string) => {
  switch (role) {
    case "admin":
      return "error";
    case "moderator":
      return "warning";
    case "user":
      return "secondary";
    default:
      return "secondary";
  }
};

export const getRoleText = (role: string) => {
  switch (role) {
    case "admin":
      return "ادمین";
    case "moderator":
      return "مدیر";
    case "user":
      return "کاربر";
    default:
      return role;
  }
};

export const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "success";
    case "inactive":
      return "secondary";
    case "suspended":
      return "error";
    default:
      return "secondary";
  }
};

export const getStatusText = (status: string) => {
  switch (status) {
    case "active":
      return "فعال";
    case "inactive":
      return "غیرفعال";
    case "suspended":
      return "مسدود";
    default:
      return status;
  }
};

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
