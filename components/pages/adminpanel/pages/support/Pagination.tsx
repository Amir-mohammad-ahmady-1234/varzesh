import React from "react";
import PageCount from "../../../../common/admin/Pagination/PageCount";
import PaginationBtns from "../../../../common/admin/Pagination/PaginationBtns";
import { useSupportStates } from "../../../../../hooks/admin/support/useSupportStates";

export default function Pagination() {
  const {
    currentPage,
    setCurrentPage,
    filteredTickets,
    itemsPerPage,
    totalPages,
  } = useSupportStates();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
      <PageCount
        currentPage={currentPage}
        count={filteredTickets.length}
        itemsPerPage={itemsPerPage}
        pageName="تیکت"
      />

      <div className="flex items-center gap-2">
        <PaginationBtns
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}
