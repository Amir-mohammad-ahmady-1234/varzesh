import GetUserById from "../../../../../server/admin/GetAdminById/GetAdminById";
import Button from "../../../../../styles/ui/Button";

export async function ProfileButton() {
  const userID = await GetUserById();
  console.log(userID);

  return <Button>profile</Button>;
}
