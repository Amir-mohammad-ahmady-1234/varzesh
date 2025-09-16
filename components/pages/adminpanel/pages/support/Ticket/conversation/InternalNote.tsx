import React from "react";
import Input from "../../../../../../common/Input";
import Button from "../../../../../../common/Button";
import { MdNote } from "react-icons/md";
import { useTicketStates } from "../../../../../../../hooks/admin/support/useTicketStates";
import { useTicketHandlers } from "../../../../../../../hooks/admin/support/useTicketHandlers";

export default function InternalNote() {
  const { showInternalNote, internalNote, setInternalNote } = useTicketStates();

  const { handleAddInternalNote } = useTicketHandlers();

  return (
    <>
      {showInternalNote && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-yellow-50 dark:bg-yellow-950/20">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="یادداشت داخلی (فقط برای تیم پشتیبانی قابل مشاهده است)..."
              value={internalNote}
              onChange={(e) => setInternalNote(e.target.value)}
              className="flex-1"
              onKeyDown={(e) => {
                if (e.key === "Enter" && internalNote.trim()) {
                  handleAddInternalNote();
                }
              }}
            />
            <Button
              onClick={handleAddInternalNote}
              disabled={!internalNote.trim()}
              className="cursor-pointer"
            >
              <MdNote className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
