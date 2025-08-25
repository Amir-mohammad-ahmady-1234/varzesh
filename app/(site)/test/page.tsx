import React from "react";
import { GetUserById } from "../../../server/user/getuserbyid/GetUserById";

export default async function Page() {
  const tokenid = await GetUserById();
  console.log(tokenid);
  if (!tokenid) return null;

  return (
    <>
      <div className="flex flex-col"></div>
    </>
  );
}
