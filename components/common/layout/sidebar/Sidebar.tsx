import { useState } from "react";
import { FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { headerItems } from "../header/HeaderNav";

type Props = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
};

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }: Props) {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (id: number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/60 backdrop-blur-md shadow-lg z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end p-4 border-b border-white/20">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-2xl text-white hover:text-secondary-100 transition-colors"
          >
            <FiX />
          </button>
        </div>

        <nav className="flex flex-col gap-2 p-4">
          {headerItems.map((item) => (
            <div key={item.id} className="text-white">
              <button
                onClick={() => toggleDropdown(item.id)}
                className="w-full flex items-center  font-medium hover:bg-primary-200 hover:text-primary-100 transition-colors py-2"
              >
                {item.dropdown && (
                  <span>
                    {openDropdown === item.id ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </span>
                )}
                <span className="text-right">{item.name}</span>
              </button>

              <div className="text-right">
                {item.dropdown && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openDropdown === item.id ? "max-h-40 mt-1" : "max-h-0"
                    }`}
                  >
                    <div className="flex flex-col gap-2 pr-4 text-sm text-gray-300">
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.id}
                          href="#"
                          className="hover:text-primary-100 transition-colors py-1"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
        />
      )}
    </>
  );
}
