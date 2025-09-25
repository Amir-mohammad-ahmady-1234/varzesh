import Image from "next/image";
import React from "react";

const news = [
  {
    id: 1,
    src: "/assets/img/news/Frame 1000001854.png",
    title: "عصبانیت و اشک جواد خیابانی",
    desc: "چرا این لحظه تلخ بازی یران را به یادم اوردید! گفتم نمیخواهم این صحنه",
  },
  {
    id: 2,
    src: "/assets/img/news/Frame 1000001855.png",
    title: "فاز یک سریع تر اجریی میشود",
    desc: "بزرگترین استادیوم جهان جایگزین ورزشگاه آزادی!",
  },
  {
    id: 3,
    src: "/assets/img/news/Frame 1000001856.png",
    title: "افشاگری رئیس فدراسیون",
    desc: "تیم 98 هم حواله خودرو گرفت!",
  },
];

function LastNews() {
  return (
    <div className="flex flex-col p-4 md:p-6 space-y-4 bg-tertiary-300 rounded-md">
      {news.map((item) => (
        <div
          key={item.id}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
        >
          <Image
            className="rounded-md flex-shrink-0"
            width={70}
            height={70}
            src={item.src}
            alt={item.title}
          />
          <div className="flex flex-col">
            <p className="text-md font-semibold">{item.title}</p>
            <p className="text-sm text-neutral-600">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LastNews;
