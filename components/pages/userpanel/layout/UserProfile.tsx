import Image from "next/image";
import React from "react";
import { TPostProfileUser } from "../../../../types/user/profile/type";

export default function UserProfile({
  userInfo,
}: {
  userInfo: TPostProfileUser;
}) {
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
        <p>{userInfo.user?.firstname}</p>
        <p>{userInfo.user?.phone}</p>
      </div>
    </div>
  );
}
