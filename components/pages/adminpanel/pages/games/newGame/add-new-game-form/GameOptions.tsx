import React from "react";

export default function GameOptions() {
  return (
    <div className="flex items-center gap-4">
      <label className="flex items-center gap-2">
        <input type="checkbox" className="rounded border-(--border)" />
        <span className="text-sm text-(--text-primary)">فعال‌سازی چت</span>
      </label>

      <label className="flex items-center gap-2">
        <input type="checkbox" className="rounded border-(--border)" />
        <span className="text-sm text-(--text-primary)">انتشار فوری</span>
      </label>
    </div>
  );
}
