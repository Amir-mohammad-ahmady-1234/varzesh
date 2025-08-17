"use client";

import React, { useEffect, useState } from "react";

type OtpTimerProps = {
  duration?: number;
  setStep?: React.Dispatch<React.SetStateAction<number>>;
};

function OtpTimer({ duration = 30, setStep }: OtpTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center justify-center gap-2 text-lg font-bold text-neutral-100">
      {timeLeft > 0 && (
        <>
          <span className="px-3 py-1 text-neutral-600">
            {seconds.toString().padStart(2, "0")}
          </span>
          :
          <span className="px-3 py-1 text-neutral-600">
            {minutes.toString().padStart(2, "0")}
          </span>
        </>
      )}
      {timeLeft <= 0 && <span className="text-sm" onClick={() => setStep?.(1)}>دریافت مجدد</span>}
    </div>
  );
}

export default OtpTimer;
