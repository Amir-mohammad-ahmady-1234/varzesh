"use client";
import React, { useState } from "react";
import { MdDownload, MdRefresh } from "react-icons/md";
import PageHeader from "../ui/PageHeader";
import Button from "../Button";
import { BiLogoDigitalocean } from "react-icons/bi";
import NewBlogModal from "../../pages/adminpanel/pages/blog/NewBlogModal";
import NewNewsModal from "../../pages/adminpanel/pages/news/NewNewsModal";

//   const exportToCSV = () => {
//     const csvContent = [
//       [
//         "شناسه",
//         "موضوع",
//         "کاربر",
//         "وضعیت",
//         "اولویت",
//         "تاریخ ایجاد",
//         "تعداد پاسخ",
//       ].join(","),
//       ...filteredTickets.map((ticket) =>
//         [
//           ticket.id,
//           `"${ticket.subject}"`,
//           `"${ticket.user.name}"`,
//           getStatusText(ticket.status),
//           getPriorityText(ticket.priority),
//           new Date(ticket.createdAt).toLocaleDateString("fa-IR"),
//           ticket.messages.length,
//         ].join(",")
//       ),
//     ].join("\n");

//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = `support-tickets-${
//       new Date().toISOString().split("T")[0]
//     }.csv`;
//     link.click();
//   };

interface Props {
  title: string;
  desc: string;
}

export default function PageTitle({ title, desc }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <PageHeader
      title={title}
      description={desc}
      action={
        <div className="flex items-center gap-2">
          <Button
            // onClick={exportToCSV}
            variant="outline"
            className="cursor-pointer bg-transparent"
          >
            <MdDownload className="w-4 h-4 ml-2" />
            خروجی CSV
          </Button>
          <Button variant="outline" className="cursor-pointer bg-transparent">
            <MdRefresh className="w-4 h-4 ml-2" />
            بروزرسانی
          </Button>
          <Button
            onClick={() => setIsModalOpen((prev) => !prev)}
            variant="outline"
            className="cursor-pointer bg-transparent"
          >
            <BiLogoDigitalocean className="w-4 h-4 ml-2" />
            {title} جدید
          </Button>
          {title === "بلاگ" ? (
            <NewBlogModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          ) : (
            <NewNewsModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          )}
        </div>
      }
    />
  );
}
