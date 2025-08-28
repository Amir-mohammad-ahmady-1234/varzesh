"use client";
import React from "react";
import Tabel from "../../components/common/Tabel";

type Person = {
  id: number;
  name: string;
  age: number;
  email: string;
  city: string;
};
function page() {
  const data: Person[] = [
    {
      id: 1,
      name: "Ali Reza",
      age: 25,
      email: "ali.reza@example.com",
      city: "Tehran",
    },
    {
      id: 2,
      name: "Sara Ahmadi",
      age: 30,
      email: "sara.ahmadi@example.com",
      city: "Shiraz",
    },
    {
      id: 3,
      name: "Hossein Karimi",
      age: 28,
      email: "hossein.karimi@example.com",
      city: "Tabriz",
    },
    {
      id: 4,
      name: "Maryam Jafari",
      age: 35,
      email: "maryam.jafari@example.com",
      city: "Isfahan",
    },
    {
      id: 5,
      name: "Reza Moradi",
      age: 22,
      email: "reza.moradi@example.com",
      city: "Mashhad",
    },
    {
      id: 6,
      name: "Fatemeh Mousavi",
      age: 27,
      email: "fatemeh.mousavi@example.com",
      city: "Tehran",
    },
    {
      id: 7,
      name: "Mohammad Taheri",
      age: 31,
      email: "m.taheri@example.com",
      city: "Kerman",
    },
    {
      id: 8,
      name: "Amin Shokri",
      age: 29,
      email: "amin.shokri@example.com",
      city: "Rasht",
    },
    {
      id: 9,
      name: "Leila Ghasemi",
      age: 26,
      email: "leila.ghasemi@example.com",
      city: "Hamedan",
    },
    {
      id: 10,
      name: "Nima Esfandiari",
      age: 33,
      email: "nima.esfandiari@example.com",
      city: "Qom",
    },
  ];

  const columns: { header: string; accessor: keyof Person }[] = [
    { header: "Name", accessor: "name" },
    { header: "Age", accessor: "age" },
    { header: "Email", accessor: "email" },
    { header: "City", accessor: "city" },
  ];
  return (
    <Tabel
      data={data}
      columns={columns}
      Isactive={true}
      dropdownItems={(row, openModal) => (
        <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
          <button
            onClick={() =>
              openModal(
                <div>
                  <h4 className="font-semibold mb-4">دانلود گزارش</h4>
                  <p>
                    لطفا فرمت مورد نظر برای دانلود گزارش {row.name} را انتخاب
                    کنید:
                  </p>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <button className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                      PDF
                    </button>
                    <button className="px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                      Excel
                    </button>
                    <button className="px-3 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600">
                      Word
                    </button>
                    <button className="px-3 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
                      CSV
                    </button>
                  </div>
                  <div className="flex justify-end mt-6">
                    <button
                      className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                      onClick={() =>
                        document
                          .querySelector(".modal-close-btn")
                          ?.dispatchEvent(
                            new MouseEvent("click", { bubbles: true })
                          )
                      }
                    >
                      بستن
                    </button>
                  </div>
                </div>
              )
            }
            className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            دانلود گزارش
          </button>
          <button
            onClick={() =>
              openModal(
                <div>
                  <h4 className="font-semibold mb-4">اشتراک‌گذاری گزارش</h4>
                  <p>گزارش {row.name} با چه کسی به اشتراک گذاشته شود؟</p>
                  <div className="mt-4">
                    <input
                      type="email"
                      placeholder="آدرس ایمیل"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex justify-end mt-6 space-x-2">
                    <button
                      className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                      onClick={() =>
                        document
                          .querySelector(".modal-close-btn")
                          ?.dispatchEvent(
                            new MouseEvent("click", { bubbles: true })
                          )
                      }
                    >
                      انصراف
                    </button>
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                      onClick={() => {
                        console.log("اشتراک‌گذاری گزارش:", row.id);
                        document
                          .querySelector(".modal-close-btn")
                          ?.dispatchEvent(
                            new MouseEvent("click", { bubbles: true })
                          );
                      }}
                    >
                      ارسال
                    </button>
                  </div>
                </div>
              )
            }
            className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            اشتراک‌گذاری
          </button>
          <button
            onClick={() => console.log("چاپ گزارش", row.id)}
            className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            چاپ
          </button>
        </div>
      )}
    />
  );
}

export default page;
