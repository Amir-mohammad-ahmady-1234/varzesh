import { GetUserById } from "../../../../../server/user/getuserbyid/GetUserById";
import GetProfileDataUser from "../../../../../server/user/paneluser/profile/GetProfileDataUser";
import Button from "../../../../../styles/ui/Button";

export async function ProfileButton() {
  const tokenid = await GetUserById();
  if (!tokenid) return;

  const { user } = await GetProfileDataUser(tokenid.userId);

  return <Button>{user?.firstname}</Button>;
}
