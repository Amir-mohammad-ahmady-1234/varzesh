import Image from "next/image";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { userInfo } from "../../../../types/user/profile/userInfo";

interface Props {
  userInfo: userInfo;
  children: React.ReactNode;
}

export default function UserProfile({ userInfo, children }: Props) {
  if (!userInfo.user) return;

  const { profileImage } = userInfo.user;

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center space-x-6">
      {profileImage ? (
        <Image
          src={profileImage}
          alt="user profile"
          width={80}
          height={0}
          className="rounded-xl"
        />
      ) : (
        <CgProfile className="size-[40px]" />
      )}
      {children}
    </div>
  );
}
