import React, { SetStateAction } from "react";
import Modal from "../../../../common/Modal";
import Button from "../../../../common/Button";

interface Props {
  showQuickReply: boolean;
  quickReplyText: string;
  setQuickReplyText: React.Dispatch<SetStateAction<string>>;
  setShowQuickReply: React.Dispatch<SetStateAction<boolean>>;
  submitQuickReply: () => void;
}

export default function FastAnswer({
  showQuickReply,
  quickReplyText,
  setQuickReplyText,
  setShowQuickReply,
  submitQuickReply,
}: Props) {
  return (
    <Modal
      isOpen={showQuickReply}
      onClose={() => setShowQuickReply(false)}
      title="پاسخ سریع"
      size="lg"
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            پاسخ شما:
          </label>
          <textarea
            value={quickReplyText}
            onChange={(e) => setQuickReplyText(e.target.value)}
            placeholder="پاسخ خود را اینجا بنویسید..."
            className="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        <div className="flex items-center justify-end gap-3">
          <Button
            variant="outline"
            onClick={() => setShowQuickReply(false)}
            className="cursor-pointer"
          >
            انصراف
          </Button>
          <Button
            onClick={submitQuickReply}
            disabled={!quickReplyText.trim()}
            className="cursor-pointer"
          >
            ارسال پاسخ
          </Button>
        </div>
      </div>
    </Modal>
  );
}
