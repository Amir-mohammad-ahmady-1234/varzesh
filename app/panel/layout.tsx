import Sidebar from "../../components/pages/userpanel/layout/Sidebar";
import { GetUserById } from "../../server/user/getuserbyid/GetUserById";
import GetProfileDataUser from "../../server/user/paneluser/profile/GetProfileDataUser";

export async function generateMetadata() {
  const tokenid = await GetUserById();
  if (!tokenid) return;
  const { user } = await GetProfileDataUser(tokenid?.userId);

  return {
    title: `پنل کاربری ${user?.firstname}`,
    description: `پنل کاربری کاربر با اسم ${user?.firstname}`,
  };
}

export default function userPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <main>{children}</main>
    </>
  );
}
