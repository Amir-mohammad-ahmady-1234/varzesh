import { FiUser } from "react-icons/fi";
import Button from "../../../../../styles/ui/Button";
import { AuthButton } from "./AuthButton";
import { ProfileButton } from "./ProfileButton";

export function BtnConditionallyGenerator({ token }: { token: string | null }) {
  if (token) return <ProfileButton />;

  return (
    <AuthButton>
      <Button className="rounded-sm" variant="primary" size="sm">
        <span className="hidden md:flex">ثبت نام</span>

        <span className="md:hidden">
          <FiUser className="text-lg" />
        </span>
      </Button>
    </AuthButton>
  );
}
