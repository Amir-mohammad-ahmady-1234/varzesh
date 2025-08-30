import React from "react";
import Button from "../../common/Button";

const classes = {
  OAuthButtons:
    "!rounded-3xl w-full max-w-[260px] !border-secondary-300 !bg-transparent",
};

function OAuthButtons() {
  return (
    <div className="w-full flex flex-col space-y-8 items-center mt-4">
      <hr className="w-full max-w-[589px]" />
      <div className="w-full flex items-center justify-center space-x-20">
        <Button variant="secondary" className={classes.OAuthButtons}>
          ثبت نام با Google
        </Button>
        <Button variant="secondary" className={classes.OAuthButtons}>
          ثبت نام با ایمیل
        </Button>
      </div>
    </div>
  );
}

export default OAuthButtons;
