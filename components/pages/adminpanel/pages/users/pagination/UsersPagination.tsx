"use client";

import React from "react";
import { useUsersStates } from "../../../../../../hooks/admin/users/useUsersStates";
import PaginationBtns from "../../../../../common/admin/Pagination/PaginationBtns";

interface Props {
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  params: Promise<{ [key: string]: string | undefined }>;
}

export default function UsersPagination({ params, pagination }: Props) {
  const { setCurrentPage } = useUsersStates();

  if (!pagination) return;
  const { page, totalPages } = pagination;

  return (
    <div className="flex items-center justify-end p-2">
      <PaginationBtns
        currentPage={page}
        params={params}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
