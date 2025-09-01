import React, { SetStateAction } from "react";
import InputDesign from "../../../../../../styles/ui/Input";
import Button from "../../../../../common/Button";
import { MdSearch } from "react-icons/md";
interface Props {
  searchQuery: string;
  setSearchQuery: React.Dispatch<SetStateAction<string>>;
}
export default function SubmitingInputs({
  searchQuery,
  setSearchQuery,
}: Props) {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex-1 relative">
        <InputDesign
          type="text"
          placeholder="جستجو بر اساس نام چت روم، توضیحات یا نوع..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-11"
          rightIcon={<MdSearch className="w-5 h-5" />}
        />
      </div>
      <Button variant="outline" className="cursor-pointer whitespace-nowrap">
        پاک کردن فیلترها
      </Button>
    </div>
  );
}
