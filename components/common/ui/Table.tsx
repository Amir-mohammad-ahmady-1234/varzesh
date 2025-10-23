import type React from "react";
/** UI-only table component */
interface Column {
  key: string;
  label: string;
  sortable?: boolean;
}

interface TableProps {
  columns: Column[];
  children: React.ReactNode;
  className?: string;
}

export default function Table({
  columns,
  children,
  className = "",
}: TableProps) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full">
        <thead>
          <tr className="border-b border-(--border)">
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-4 py-3 text-right text-sm font-medium text-(--text-secondary) bg-(--bg-secondary)"
              >
                <div className="flex items-center gap-2">
                  {column.label}
                  {column.sortable && (
                    <svg
                      className="w-4 h-4 text-(--text-muted)"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      />
                    </svg>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
