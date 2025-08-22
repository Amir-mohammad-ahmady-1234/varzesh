import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../styles/ui/Button";

const NotFound = () => {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center space-y-6">
      <div className="flex flex-col gap-10">
        <Image
          src="/img/not-found/404.svg"
          width={300}
          height={255}
          alt="404 error image"
        />
        <p className="text-center">متاسفانه صفحه مورد نظر یافت نشد!</p>
      </div>
      <div className="px-5 space-y-7">
        <p className="text-center text-sm">
          در صورتی که با کلیک کردن روی یک لینک به این صفحه رسیده اید، مدیریت
          سایت ورزش سه را از این موضوع با خبر سازید.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/">
            <Button variant="primary" size="sm" className="rounded-sm">
              بازگشت به صفحه اصلی
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="secondary" size="sm" className="rounded-sm">
              اطلاع به مدیریت سایت
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
