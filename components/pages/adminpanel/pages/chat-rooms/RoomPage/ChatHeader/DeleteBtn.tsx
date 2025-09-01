import React from "react";
import Button from "../../../../../../common/Button";
import { MdDelete } from "react-icons/md";

interface Props {
  selectedMessages: Set<string>;
  handleBulkDelete: () => void;
}

export default function DeleteBtn({
  selectedMessages,
  handleBulkDelete,
}: Props) {
  return (
    <>
      {selectedMessages.size > 0 && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            {selectedMessages.size.toLocaleString("fa-IR")} انتخاب شده
          </span>
          <Button
            size="sm"
            variant="destructive"
            onClick={handleBulkDelete}
            className="cursor-pointer"
          >
            <MdDelete className="w-4 h-4 ml-1" />
            حذف
          </Button>
        </div>
      )}
    </>
  );
}
