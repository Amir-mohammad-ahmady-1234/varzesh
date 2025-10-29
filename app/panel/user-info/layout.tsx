import PageTitle from "../../../components/pages/userpanel/pages/user-info/PageTitle";
import { GetUserById } from "../../../server/user/getuserbyid/GetUserById";
import GetProfileDataUser from "../../../server/user/paneluser/profile/GetProfileDataUser";

interface Props {
  changeUserInfo: React.ReactNode;
  changePhone: React.ReactNode;
}

export async function generateMetadata() {
  const userId = (await GetUserById()) as { userId: number };
  const userDetails = await GetProfileDataUser(userId.userId);

  return {
    title: `پنل: ${userDetails.user?.firstname}`,
    description: `پنل کاربری کاربر با اسم : ${userDetails.user?.firstname}`,
  };
}

export default async function UserPanelLayout({
  changeUserInfo,
  changePhone,
}: Props) {
  return (
    <div className="rounded-2xl p-6">
      <PageTitle />

      <div className="space-y-15">
        {changeUserInfo}
        {changePhone}
      </div>
    </div>
  );
}
