import Image from "next/image";
import React from "react";

export default function UserProfile() {
  return (
    <div className="flex items-center space-x-6">
      <div>
        <Image
          src={"/assets/img/footer/union.png"}
          alt="user profile"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div>
        <p>Amir</p>
        <p>09059796518</p>
      </div>
    </div>
  );
}
