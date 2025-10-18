import React from "react";
import Button from "./Button";

interface Props {
  isLoading: boolean;
  btnText: string;
}

export default function LoadingButton({ isLoading, btnText }: Props) {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className="relative flex items-center justify-center gap-2"
    >
      {isLoading ? (
        <>
          <span className="loader border-2 border-t-transparent border-white rounded-full w-4 h-4 animate-spin"></span>
          در حال ایجاد...
        </>
      ) : (
        btnText
      )}
    </Button>
  );
}
