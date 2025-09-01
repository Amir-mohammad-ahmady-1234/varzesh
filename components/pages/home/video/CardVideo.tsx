import React, { ReactNode } from "react";

interface TCardVideo {
  children: ReactNode;
  title: string;
}
function CardVideo({ children, title }: TCardVideo) {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-5">
      <h4 className="font-bold text-xl">{title}</h4>
      <div>{children}</div>
    </div>
  );
}

export default CardVideo;
