import { GetUserById } from "../../../../../server/user/getuserbyid/GetUserById";
import Button from "../../../../../styles/ui/Button";

export async function ProfileButton() {
  const tokenid = await GetUserById();

  if (!tokenid) return;

  return <Button>{tokenid.role}</Button>;
}
