import Image from "next/image";
import React from "react";

function page() {
  return (
    <section>
      <div>
        <Image
          src={"/assets/img/concat/banner.png"}
          alt="بنر سایت "
          width={1500}
          height={1500}
          className="w-full"
        />
      </div>
      <div className="max-w-7xl mx-auto flex flex-col ">
        <h4 className="text-bold">پخش زنده</h4>
        <div className="flex justify-center items-center mx-auto gap-5">
          <div className="w-2/3 ">
            <Image
              src={"/assets/img/concat/side3.png"}
              alt="side1"
              width={900}
              height={900}
            />
          </div>
          <div className="w-1/3 space-y-5">
            <Image
              src={"/assets/img/concat/side1.png"}
              alt="side1"
              width={300}
              height={300}
            />
            <Image
              src={"/assets/img/concat/side2.png"}
              alt="side1"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default page;
