import { BiMessageSquare } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import {
  MdOutlinePermDeviceInformation,
  MdOutlineRoomService,
} from "react-icons/md";
import Button from "../../../../styles/ui/Button";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="hidden lg:block w-1/5 h-[100vh] px-8 py-10 border-l">
      <div className="flex flex-col h-full justify-between">
        <div className="space-y-8">
          <div className="flex items-center space-x-6">
            <div>
              <Image
                src={"/img/footer/union.png"}
                alt="user profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div>
              <p>Amir</p>
              <p>09059796518</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <MdOutlinePermDeviceInformation />
              <Button variant="ghost" size="md">
                اطلاعات
              </Button>
            </div>
            <div className="flex items-center">
              <FiSettings />
              <Button variant="ghost" size="md">
                تنظیمات
              </Button>
            </div>
            <div className="flex items-center">
              <MdOutlineRoomService />
              <Button variant="ghost" size="md">
                روم ها
              </Button>
            </div>
            <div className="flex items-center">
              <BiMessageSquare />
              <Button variant="ghost" size="md">
                پیام ها
              </Button>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-sidebar-border">
          <div className="text-xs text-sidebar-foreground/60 text-center">
            نسخه ۱.۰.۰
          </div>
        </div>
      </div>
    </div>
  );
}
