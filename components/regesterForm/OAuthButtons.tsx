import React from "react";

const classes = {
  OAuthButtons: "button button-secondary !border-secondary-100 !bg-transparent",
};

function OAuthButtons() {
  return (
    <div className="w-full flex flex-col space-y-8 items-center mt-4">
      <hr className="w-full max-w-[589px]" />
      <div className="flex space-x-20">
        <button className={classes.OAuthButtons}>ثبت نام با Google</button>
        <button className={classes.OAuthButtons}>ثبت نام با ایمیل</button>
      </div>
    </div>
  );
}

export default OAuthButtons;
