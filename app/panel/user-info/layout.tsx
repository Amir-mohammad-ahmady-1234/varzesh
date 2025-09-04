import PageTitle from "../../../components/pages/userpanel/pages/user-info/PageTitle";

interface Props {
  changeUserInfo: React.ReactNode;
  changePhone: React.ReactNode;
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
