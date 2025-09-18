import React, { SetStateAction } from "react";
import { MdSearch } from "react-icons/md";
import Button from "../../Button";
import InputDesign from "../../../../styles/ui/Input";

interface Props {
  searchQuery?: string;
  setSearchQuery?: React.Dispatch<SetStateAction<string>>;
  setStatusFilter?: React.Dispatch<
    SetStateAction<"all" | "open" | "in-progress" | "resolved" | "closed">
  >;
  setPriorityFilter?: React.Dispatch<
    SetStateAction<"all" | "low" | "medium" | "high" | "urgent">
  >;
  placehlderText?: string;
}

export default function Search({
  searchQuery,
  setSearchQuery,
  setStatusFilter,
  setPriorityFilter,
  placehlderText,
}: Props) {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex-1 relative">
        <InputDesign
          type="text"
          placeholder={placehlderText}
          value={searchQuery}
          onChange={(e) => setSearchQuery?.(e.target.value)}
          className="h-11"
          rightIcon={<MdSearch className="w-5 h-5" />}
        />
      </div>
      <Button
        variant="outline"
        onClick={() => {
          setSearchQuery?.("");
          setStatusFilter?.("all");
          setPriorityFilter?.("all");
        }}
        className="cursor-pointer whitespace-nowrap"
      >
        پاک کردن فیلترها
      </Button>
    </div>
  );
}
