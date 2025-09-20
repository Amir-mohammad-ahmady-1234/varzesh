"use client";

import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import Button from "../../Button";
import InputDesign from "../../../../styles/ui/Input";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  placehlderText?: string;
}

export default function Search({ placehlderText }: Props) {
  const router = useRouter();
  const params = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(params.get("search") || "");

  const handleFilterChange = (key: string, value: string) => {
    const newParams = new URLSearchParams(params.toString());
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    router.push(`/admin/support?${newParams.toString()}`);
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    handleFilterChange("search", searchQuery);
  }

  function handleResetFilters() {
    router.push("/admin/support");
    setSearchQuery("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-4">
      <div className="flex-1 relative">
        <InputDesign
          type="text"
          placeholder={placehlderText}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-11"
          rightIcon={<MdSearch className="w-5 h-5" />}
        />
      </div>
      <Button
        variant="outline"
        type="button"
        onClick={handleResetFilters}
        className="cursor-pointer whitespace-nowrap"
      >
        پاک کردن فیلترها
      </Button>
    </form>
  );
}
