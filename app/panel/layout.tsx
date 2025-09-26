import { Suspense } from "react";
import SidebarWrapper from "../../components/pages/userpanel/layout/SidebarWrapper";
import { GetUserById } from "../../server/user/getuserbyid/GetUserById";
import GetProfileDataUser from "../../server/user/paneluser/profile/GetProfileDataUser";

interface Props {
  children: React.ReactNode;
}

export default async function UserPanelLayout({ children }: Props) {
  const userID = await GetUserById();
  if (!userID) return;
  const userInfo = await GetProfileDataUser(userID.userId);

  return (
    <Suspense>
      <SidebarWrapper userInfo={userInfo}>{children}</SidebarWrapper>;
    </Suspense>
  );
}
