import Image from "next/image";
import React from "react";

function FooterCopyright() {
  return (
    <div className="flex items-center flex-col justify-around md:flex-row p-4">
      <p className="text-sm text-center">
        تمام حقوق مادی و معنوی این سایت متعلق به ورزش سه می باشد. شما می توانید
        از سایت ورزش سه در صورت پذیرش موافقت نامه کاربری استفاده نمایید.
      </p>
      <div className="flex items-center justify-center gap-3 p-7">
        <Image
          src={"/assets/img/footer/Union.png"}
          alt="footericons"
          width={30}
          height={30}
        />
        <Image
          src={"/assets/img/footer/Union(1).png"}
          alt="footericons"
          width={30}
          height={30}
        />
        <Image
          src={"/assets/img/footer/Vector(1).png"}
          alt="footericons"
          width={30}
          height={30}
        />
        <Image
          src={"/assets/img/footer/Vector(2).png"}
          alt="footericons"
          width={30}
          height={30}
        />
        <Image
          src={"/assets/img/footer/Vector(3).png"}
          alt="footericons"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
}

export default FooterCopyright;
