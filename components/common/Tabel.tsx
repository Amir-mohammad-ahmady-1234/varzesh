"use client";
import React, { useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import Modal from "./Modal";

export type TableData = {
  id: string | number;
};

interface Column {
  header: string;
  accessor: string;
}

interface Ttabel<T extends TableData> {
  data: T[];
  columns: Column[];
  Isactive: boolean;
  dropdownItems?: (
    row: T,
    openModal: (val: React.ReactNode) => void
  ) => React.ReactNode;
}

function Tabel<T extends TableData>({
  data,
  columns,
  Isactive = true,
  dropdownItems,
}: Ttabel<T>) {
  const [activeDropdown, setActiveDropdown] = useState<string | number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  function handleDelete(id: string | number) {
    console.log("delete", id);
  }

  function handleEdit(id: string | number) {
    console.log("edit", id);
  }

  function openModal(content: React.ReactNode) {
    setModalContent(content);
    setIsModalOpen(true);
  }

  function closeModal() {
    setModalContent(null);
    setIsModalOpen(false);
  }

  function toggleDropdown(id: number) {
    setActiveDropdown(activeDropdown === id ? null : id);
  }

  const defaultItemsDropdown = (row: T) => (
    <div className="absolute left-0 mt-2 w-44 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-20 border border-gray-200 dark:border-gray-700 overflow-hidden">
      <button
        onClick={() => handleEdit(row.id)}
        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        <BiEdit size={16} className="ml-2" />
        ویرایش
      </button>
      <button
        onClick={() => handleDelete(row.id)}
        className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/40 transition"
      >
        <BiTrash size={16} className="ml-2" />
        حذف
      </button>
    </div>
  );

  return (
    <div className="overflow-x-auto m-5 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <table className="min-w-full border-collapse text-sm sm:text-base">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800 ">
            {columns.map((col) => (
              <th
                key={col.accessor}
                className="px-6 py-3 text-center  text-sm font-semibold text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700"
              >
                {col.header}
              </th>
            ))}
            {Isactive && (
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">
                عملیات
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={row.id}
              className={`transition-colors duration-200 ${
                idx % 2 === 0
                  ? "bg-white dark:bg-gray-900"
                  : "bg-gray-50 dark:bg-gray-800"
              } hover:bg-gray-100 dark:hover:bg-gray-700`}
            >
              {columns.map((col) => (
                <td
                  key={col.accessor}
                  className="px-6 py-3 text-center text-sm text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700"
                >
                  {row[col.accessor as keyof T] as React.ReactNode}
                </td>
              ))}
              {Isactive && (
                <td className="px-6 py-3 text-center relative border-b border-gray-200 dark:border-gray-700">
                  {dropdownItems && (
                    <div className="mr-3  ">
                      <button
                        onClick={() => toggleDropdown(Number(row.id))}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition text-gray-600 dark:text-gray-300"
                      >
                        {activeDropdown === row.id ? (
                          <MdClose size={18} />
                        ) : (
                          <FiMoreVertical size={18} />
                        )}
                      </button>

                      {activeDropdown === row.id &&
                        (dropdownItems
                          ? dropdownItems(row, openModal)
                          : defaultItemsDropdown(row))}
                    </div>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal} title="عملیات">
          <div>{modalContent}</div>
        </Modal>
      )}
    </div>
  );
}

export default Tabel;
