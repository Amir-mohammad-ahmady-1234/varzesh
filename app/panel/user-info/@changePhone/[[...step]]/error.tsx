"use client";

import React from "react";

export default function error({ error }: { error: { message: string } }) {
  return (
    <>
      <h1>{error.message}</h1>
      <p>مسیر اشتباه</p>;
    </>
  );
}
