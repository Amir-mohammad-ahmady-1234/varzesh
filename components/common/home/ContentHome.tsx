import React, { ReactNode } from "react";

interface SectionContainerProps {
  title: string;
  children: ReactNode;
}

function SectionContainer({ title, children }: SectionContainerProps) {
  return (
    <section className="my-8">
      <div className="mb-4">
        <h5 className="text-white text-2xl font-bold mb-2 inline-block relative">
          {title}
          <span className="absolute left-0 bottom-0 h-1 bg-primary-100 w-full rounded-full"></span>
        </h5>
      </div>
      <div>{children}</div>
    </section>
  );
}

export default SectionContainer;
