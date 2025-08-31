import React from "react";
import { GetUserFilterQuery } from "../../../server/admin/paneladmin/users/GetUserFilterQurey/GetUserFilterQurey";
import { GetSupportFilterQuery } from "../../../server/admin/paneladmin/support/GetSupportFilterQurey/GetSupportFilterQurey";

export default async function Page() {
  let result = await GetUserFilterQuery({});
  console.log("=== بدون فیلتر ===");
  console.log(result);

  // تست با فیلتر status
  result = await GetUserFilterQuery({ status: "Waiting" });
  console.log("=== فیلتر status=Approved ===");
  console.log(result);

  // تست با فیلتر role
  result = await GetUserFilterQuery({ role: "ADMIN" });
  console.log("=== فیلتر role=ADMIN ===");
  console.log(result);

  // تست با فیلتر search
  result = await GetUserFilterQuery({ search: "mahdi" });
  console.log("=== فیلتر search=John ===");
  console.log(result);
  result = await GetUserFilterQuery({ search: "09059796518" });
  console.log("=== فیلتر search=John ===");
  console.log(result);
  result = await GetUserFilterQuery({ search: "amirMDev@gmail.com" });
  console.log("=== فیلتر search=John ===");
  console.log(result);

  // تست ترکیبی
  result = await GetUserFilterQuery({
    status: "Waiting",
    role: "ADMIN",
    search: "mahdi",
  });
  console.log("=== فیلتر ترکیبی ===");
  console.log(result);
  /////////////////////////////////
  const allTickets = await GetSupportFilterQuery({});
  console.log("All Tickets:", allTickets);

  // 2️⃣ جستجو بر اساس کلمه‌ای در title یا description
  const searchTickets = await GetSupportFilterQuery({ serch: "خطا" });
  console.log("Search Tickets:", searchTickets);

  // 3️⃣ فیلتر بر اساس status
  const statusTickets = await GetSupportFilterQuery({ status: "Waiting" });
  console.log("Status Tickets:", statusTickets);

  // 4️⃣ فیلتر بر اساس priority
  const priorityTickets = await GetSupportFilterQuery({ priority: "URGENT" });
  console.log("Priority Tickets:", priorityTickets);

  // 5️⃣ ترکیبی از search + status + priority + sort
  const combinedTickets = await GetSupportFilterQuery({
    serch: "سرور",
    status: "Blocked",
    priority: "NORMAL",
    sort: "asc",
  });
  console.log("Combined Tickets:", combinedTickets);
  return (
    <>
      <div className="flex flex-col"></div>
    </>
  );
}
