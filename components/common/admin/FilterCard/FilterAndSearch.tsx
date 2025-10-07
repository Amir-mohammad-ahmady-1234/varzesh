"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import CartContainer from "./CartContainer";
import CartHeader from "./CartHeader";
import Search from "./Search";
import Button from "../../Button";
import { CardContent } from "../../ui/Card";

type Item = {
  name: string;
  value: string;
  key: string;
};

type ItemBtn = {
  title: string;
  items: Item[];
};

type Props = {
  itemsbtn: ItemBtn[];
  isfilter: boolean;
  description: string;
  params: Record<string, string | undefined>;
};

export default function FilterAndSearch({
  isfilter,
  itemsbtn,
  description,
  params,
}: Props) {
  const router = useRouter();
  const pagename = usePathname().split("/")[2];

  const handleFilterChange = (key: string, value: string) => {
    const cleanParams = Object.fromEntries(
      Object.entries(params).filter(([_, v]) => v !== undefined)
    ) as Record<string, string>;

    const newParams = new URLSearchParams(cleanParams);

    const currentValue = newParams.get(key);

    if (currentValue === value) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }

    router.push(`/admin/${pagename}?${newParams.toString()}`);
  };

  return (
    <CartContainer>
      <CartHeader title={description} />
      <CardContent>
        <Search
          placehlderText="جست‌وجو تیکت ساپورت مد نظر"
          pagename={pagename}
          params={params}
        />
        <div className="flex flex-wrap mt-5">
          {isfilter
            ? itemsbtn.map((category, i) => (
                <div key={i} className="flex flex-wrap items-center gap-3">
                  <span className="text-md font-medium text-gray-700 dark:text-gray-300">
                    {category.title}:
                  </span>
                  <ul>
                    {category.items.map((btn, j) => (
                      <Button
                        key={j}
                        variant={
                          params[btn.key] === btn.value ? "primary" : "outline"
                        }
                        size="sm"
                        className="m-1"
                        onClick={() => handleFilterChange(btn.key, btn.value)}
                      >
                        {btn.name}
                      </Button>
                    ))}
                  </ul>
                </div>
              ))
            : "no filter"}
        </div>
      </CardContent>
    </CartContainer>
  );
}
