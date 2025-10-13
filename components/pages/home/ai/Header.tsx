import React from "react";
import { MdClose } from "react-icons/md";

export default function Header({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex items-center justify-between bg-primary-100 px-4 py-3 rounded-md">
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
  );
}
