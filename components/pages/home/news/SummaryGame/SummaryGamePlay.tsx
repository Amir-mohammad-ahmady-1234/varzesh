"use client";

import React, { useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import Tabs from "./Tabs";
import Games from "./Games";

function SummaryGamePlay() {
  const [categori, setCategori] = useState<number | null>(1);

  return (
    <section className="w-full bg-primary-600 p-4 md:p-6 rounded-xl shadow-md">
      <header className="flex items-center justify-between mb-6">
        <h6 className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
          <span>خلاصه بازی‌های هفته</span>
          <SlArrowLeft className="text-sm md:text-base" />
        </h6>
      </header>

      <div className="relative mb-6">
        <Tabs categori={categori} setCategori={setCategori} />
      </div>

      <div className="w-full">
        <Games categori={categori} />
      </div>
    </section>
  );
}

export default SummaryGamePlay;
