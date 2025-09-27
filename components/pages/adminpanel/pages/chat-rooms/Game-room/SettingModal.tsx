'use client'

import React from "react";
import Modal from "../../../../../common/Modal";
import Button from "../../../../../common/Button";
import { MdBlock, MdDelete, MdEdit, MdSettings } from "react-icons/md";
import { useChatRoom } from "../../../../../../hooks/admin/chat-room/useChatRoom";

export default function SettingModal() {
  const { setShowRoomModal, showRoomModal } = useChatRoom();

  return (
    <Modal
      isOpen={showRoomModal}
      onClose={() => setShowRoomModal(false)}
      title="مدیریت چت روم"
      size="md"
    >
      <div className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          عملیات مدیریتی برای چت روم انتخاب شده
        </p>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="cursor-pointer bg-transparent">
            <MdEdit className="w-4 h-4 ml-2" />
            ویرایش
          </Button>
          <Button variant="outline" className="cursor-pointer bg-transparent">
            <MdSettings className="w-4 h-4 ml-2" />
            تنظیمات
          </Button>
          <Button variant="outline" className="cursor-pointer bg-transparent">
            <MdBlock className="w-4 h-4 ml-2" />
            مسدودسازی
          </Button>
          <Button variant="destructive" className="cursor-pointer">
            <MdDelete className="w-4 h-4 ml-2" />
            حذف
          </Button>
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t">
          <Button
            variant="outline"
            onClick={() => setShowRoomModal(false)}
            className="cursor-pointer"
          >
            انصراف
          </Button>
        </div>
      </div>
    </Modal>
  );
}
