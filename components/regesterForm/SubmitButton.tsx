import Link from "next/link";
import React from "react";
import RulesAccept from "./RulesAccept";

function SubmitButton({
  checked,
  setChecked,
}: {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="w-full max-w-[600px] m-3 space-y-7">
      <RulesAccept checked={checked} setChecked={setChecked} />

      <div>
        <button
          disabled={checked}
          className="w-full button button-primary md rounded-xl disabled:bg-neutral-400"
        >
          ثبت نام
        </button>

        <p className="text-sm text-left">
          از قبل ثبت نام کرده اید؟{" "}
          <Link
            href="login"
            className="text-lg font-bold text-secondary-100 underline underline-offset-4"
          >
            ورود
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SubmitButton;
