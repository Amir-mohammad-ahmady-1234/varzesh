import React from "react";
import { MdClose, MdSend } from "react-icons/md";

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-end justify-end bg-black/40 p-2 md:p-4">
      <div className="flex flex-col w-full max-w-[360px] md:max-w-[400px] bg-bg-primary rounded-t-xl md:rounded-xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between bg-secondary-100 px-4 py-3">
          <h3 className="text-neutral-100 font-semibold text-base md:text-lg">
            پشتیبانی آنلاین
          </h3>
          <button
            onClick={onClose}
            className="text-neutral-100 hover:text-neutral-200 transition-colors"
          >
            <MdClose size={22} />
          </button>
        </div>

        <div className="flex-1 p-4 space-y-2 h-[320px] md:h-[400px] overflow-y-auto bg-tertiary-200">
          <div className="max-w-[70%] bg-neutral-100 text-bg-primary px-3 py-2 rounded-lg self-start">
            پیام نمونه از پشتیبانی
          </div>
          <div className="max-w-[70%] bg-primary-100 text-neutral-100 px-3 py-2 rounded-lg self-end">
            پیام نمونه کاربر
          </div>
        </div>

        <div className="flex items-center p-3 border-t border-neutral-400 bg-tertiary-200">
          <input
            type="text"
            placeholder="پیام خود را بنویسید..."
            className="flex-1 bg-neutral-100 text-bg-primary rounded-full px-4 py-2 focus:outline-none placeholder-neutral-400"
          />
          <button className="ml-2 bg-secondary-100 hover:bg-secondary-200 text-neutral-100 rounded-full p-2 transition-colors">
            <MdSend size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
