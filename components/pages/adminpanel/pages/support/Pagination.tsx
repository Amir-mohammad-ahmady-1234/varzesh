import React from "react";
import PageCount from "../../../../common/admin/Pagination/PageCount";
import PaginationBtns from "../../../../common/admin/Pagination/PaginationBtns";
import { useSupportStates } from "../../../../../hooks/admin/support/useSupportStates";

interface Props {
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export default function Pagination({ pagination }: Props) {
  const { setCurrentPage } = useSupportStates();

  if (!pagination) return;
  const { limit, page, total, totalPages } = pagination;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
      <PageCount
        currentPage={page}
        count={total}
        itemsPerPage={limit}
        pageName="تیکت"
      />

      <div className="flex items-center gap-2">
        <PaginationBtns
          currentPage={page}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}
