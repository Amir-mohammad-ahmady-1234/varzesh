import React, { SetStateAction } from "react";
import Button from "../../Button";

interface Props {
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
  currentPage: number;
  totalPages: number;
}

export default function PaginationBtns({
  setCurrentPage,
  currentPage,
  totalPages,
}: Props) {
  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="cursor-pointer"
      >
        قبلی
      </Button>

      <div className="flex gap-1">
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          let page = i + 1;
          if (totalPages > 5) {
            if (currentPage > 3) {
              page = currentPage - 2 + i;
            }
            if (currentPage > totalPages - 2) {
              page = totalPages - 4 + i;
            }
          }
          return (
            <Button
              key={page}
              variant={page === currentPage ? "primary" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(page)}
              className="cursor-pointer w-10"
            >
              {page.toLocaleString("fa-IR")}
            </Button>
          );
        })}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="cursor-pointer"
      >
        بعدی
      </Button>
    </>
  );
}
