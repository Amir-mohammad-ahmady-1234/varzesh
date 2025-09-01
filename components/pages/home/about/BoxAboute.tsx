import React from "react";

function BoxAboute({
  title,
  context,
}: {
  title: string;
  context: string | string[];
}) {
  return (
    <div className="flex flex-col border rounded-lg p-4 shadow-md bg-primary-500">
      <h5 className="font-bold text-lg mb-2">{title}</h5>
      <ul className="list-disc pr-5 space-y-1">
        {Array.isArray(context) ? (
          context.map((item, i) => <li key={i}>{item}</li>)
        ) : (
          <p>{context}</p>
        )}
      </ul>
    </div>
  );
}

export default BoxAboute;
