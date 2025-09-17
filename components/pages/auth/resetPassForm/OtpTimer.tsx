"use client";

import React, { useEffect, useState } from "react";

type OtpTimerProps = {
  duration?: number;
  setStep?: React.Dispatch<React.SetStateAction<number>>;
  handler?: () => void;
};

function OtpTimer({ duration = 300, setStep, handler }: OtpTimerProps) {
  const locDuration = localStorage.getItem("duration");
  const [timeLeft, setTimeLeft] = useState(
    locDuration ? +locDuration : duration
  );

  useEffect(() => {
    if (timeLeft <= 0) {
      return;
    }

    const interval = setInterval(() => {
      if (locDuration)
        localStorage.setItem("duration", (+locDuration - 1).toString());

      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, locDuration]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (timeLeft <= 0) {
    handler?.();
  }

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
      {timeLeft <= 0 && (
        <span
          className="text-sm"
          onClick={() => {
            setStep?.(1);
          }}
        >
          دریافت مجدد
        </span>
      )}
    </div>
  );
}

export default OtpTimer;
