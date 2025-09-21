"use client";

import React from "react";
import CartContainer from "./CartContainer";
import CartHeader from "./CartHeader";
import { CardContent } from "../../../../styles/ui/Card";
import Search from "./Search";
import Button from "../../Button";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
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
};
export default function FilterAndSearch({
  isfilter,
  itemsbtn,
  description,
}: Props) {
  const router = useRouter();
  const params = useSearchParams();
  const pagename = usePathname().split("/")[2];

  const handleFilterChange = (key: string, value: string) => {
    const newParams = new URLSearchParams(params.toString());
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
          placehlderText="جست و جو تیکت ساپورت مد نظر"
          pagename={pagename}
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
                          params.get(btn.key) === btn.value
                            ? "primary"
                            : "outline"
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
