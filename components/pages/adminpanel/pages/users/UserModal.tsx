"use client";

import React from "react";
import Modal from "../../../../common/Modal";
import Button from "../../../../common/Button";
import { useUsersStates } from "../../../../../hooks/admin/users/useUsersStates";

export default function UserModal() {
  const {
    showBulkModal,
    setShowBulkModal,
    getBulkActionDescription,
    bulkAction,
    confirmBulkAction,
    getBulkActionText,
  } = useUsersStates();

  return (
    <Modal
      isOpen={showBulkModal}
      onClose={() => setShowBulkModal(false)}
      title={`تأیید ${getBulkActionText()}`}
      size="md"
    >
      <div className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          {getBulkActionDescription()}
        </p>

        <div className="flex items-center justify-end gap-3">
          <Button
            variant="outline"
            onClick={() => setShowBulkModal(false)}
            className="cursor-pointer"
          >
            انصراف
          </Button>
          <Button
            variant={bulkAction === "delete" ? "destructive" : "primary"}
            onClick={confirmBulkAction}
            className="cursor-pointer"
          >
            تأیید {getBulkActionText()}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
