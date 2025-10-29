import React from "react";

export default function HomeLiveresultsSkeleton() {
  const rows = Array.from({ length: 7 });

  return (
    <div className="p-4">
      <div className="w-full border border-(--border) rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-(--bg-secondary)">
            <tr>
              {[
                "تیم‌ها",
                "لیگ",
                "مرحله",
                "وضعیت بازی",
                "تاریخ",
                "ساعت",
                "توضیحات",
              ].map((label) => (
                <th
                  key={label}
                  className="px-4 py-3 text-right font-semibold text-(--text-secondary)"
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="animate-pulse">
            {rows.map((_, i) => (
              <tr
                key={i}
                className="border-b border-(--border) last:border-none"
              >
                {Array.from({ length: 7 }).map((__, j) => (
                  <td key={j} className="px-4 py-3">
                    <div className="h-4 bg-(--bg-muted) rounded w-3/4"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
