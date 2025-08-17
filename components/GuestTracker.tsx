"use client";

import { useEffect } from "react";

export function GuestTracker() {
  useEffect(() => {
    async function getTrack() {
      try {
        const res = await fetch("http://localhost:3000/api/guest", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();

        console.log("Guest Api:", data);
      } catch (err) {
        console.log(err);
      }
    }

    getTrack();
  }, []);

  return null;
}
