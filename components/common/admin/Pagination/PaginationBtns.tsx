"use client";
import React, { SetStateAction } from "react";
import Button from "../../Button";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
  currentPage: number;
  totalPages: number;
  params: Promise<{ [key: string]: string | undefined }>;
}

export default function PaginationBtns({
  currentPage,
  totalPages,
  params,
}: Props) {
  const router = useRouter();
  const pagename = usePathname().split("/")[2];

  function handleChangePage(key: string, value: string) {
    const newParams = new URLSearchParams(params.toString());
    const currentValue = newParams.get(key);
    if (currentValue === value) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    router.push(`/admin/${pagename}?${newParams.toString()}`);
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleChangePage("page", (+currentPage - 1).toString())}
        disabled={+currentPage === 1}
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

            console.log("page", page);
          }
          return (
            <Button
              key={page}
              variant={page === +currentPage ? "primary" : "outline"}
              size="sm"
              onClick={() => handleChangePage("page", page.toString())}
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
        onClick={() => handleChangePage("page", (+currentPage + 1).toString())}
        disabled={+currentPage === totalPages}
        className="cursor-pointer"
      >
        بعدی
      </Button>
    </>
  );
}
