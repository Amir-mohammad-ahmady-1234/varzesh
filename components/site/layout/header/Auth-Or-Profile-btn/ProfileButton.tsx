import { GetUserById } from "../../../../../server/user/getuserbyid/GetUserById";
import GetProfileDataUser from "../../../../../server/user/paneluser/profile/GetProfileDataUser";
import Dropdown from "../Dropdown";

export async function ProfileButton() {
  const tokenid = await GetUserById();
  if (!tokenid) return;

  const { user } = await GetProfileDataUser(tokenid.userId);

  const DropItems = [
    {
      id: 1,
      name: user?.firstname ?? "کاربر",
      dropdown: [
        { id: 1, name: "پروفایل کاربری" },
        { id: 2, name: "خروح" },
      ],
    },
  ];

  return <Dropdown DropItems={DropItems} usage="authBtn" />;
}
