import React from "react";

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
  return <div>page</div>;
}

export default page;
