import React from "react";

interface Props {
  currentPage: number;
  itemsPerPage: number;
  count: number;
  pageName: string;
}

export default function PageCount({
  currentPage,
  itemsPerPage,
  count,
  pageName,
}: Props) {
  return (
    <div className="text-sm text-gray-600 dark:text-gray-400">
      نمایش {((currentPage - 1) * itemsPerPage + 1).toLocaleString("fa-IR")} تا{" "}
      {Math.min(currentPage * itemsPerPage, count).toLocaleString("fa-IR")} از{" "}
      {count.toLocaleString("fa-IR")} {pageName}
    </div>
  );
}
