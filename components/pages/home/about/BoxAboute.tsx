import React from "react";

function BoxAboute({
  title,
  context,
}: {
  title: string;
  context: string | string[];
}) {
  return (
    <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/80 via-purple-600/80 to-pink-500/80 backdrop-blur-md p-6 shadow-[0_8px_20px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-pink-400/20 via-purple-400/20 to-indigo-400/30 blur-2xl" />

      <div className="relative z-10">
        <h5 className="font-extrabold text-xl mb-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200">
          {title}
        </h5>

        <ul className="list-disc pr-5 space-y-2 text-sm text-white/90 leading-relaxed">
          {Array.isArray(context) ? (
            context.map((item, i) => <li key={i}>{item}</li>)
          ) : (
            <p>{context}</p>
          )}
        </ul>
      </div>

      <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

export default BoxAboute;
