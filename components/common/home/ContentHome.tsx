import React, { ReactNode } from "react";

interface SectionContainerProps {
  title: string;
  children: ReactNode;
  Titleclass?: string;
}

function SectionContainer({
  title,
  children,
  Titleclass = "underline decoration-[#FF8E25] underline-offset-[15px] font-semibold",
}: SectionContainerProps) {
  return (
    <section className="my-8 flex flex-col gap-4">
      <div className="mb-4">
        <h5 className={Titleclass}>{title}</h5>
      </div>
      <div>{children}</div>
    </section>
  );
}

export default SectionContainer;
