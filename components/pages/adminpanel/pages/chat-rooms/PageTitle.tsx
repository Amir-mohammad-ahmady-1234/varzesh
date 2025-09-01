import React, { SetStateAction } from "react";
import Button from "../../../../common/Button";
import { MdAdd, MdLiveTv, MdRefresh } from "react-icons/md";
import PageHeader from "../../../../../styles/ui/PageHeader";

interface Props {
  stats: {
    total: number;
    active: number;
    totalParticipants: number;
    totalMessages: number;
  };
  isLiveMode: boolean;
  setIsLiveMode: React.Dispatch<SetStateAction<boolean>>;
}

export default function PageTitle({ stats, isLiveMode, setIsLiveMode }: Props) {
  return (
    <PageHeader
      title="مدیریت چت روم‌ها"
      description={`مدیریت و نظارت بر ${stats.total.toLocaleString(
        "fa-IR"
      )} چت روم با ${stats.totalParticipants.toLocaleString(
        "fa-IR"
      )} شرکت‌کننده`}
      action={
        <div className="flex items-center gap-2">
          <Button
            variant={isLiveMode ? "destructive" : "outline"}
            onClick={() => setIsLiveMode((prev) => !prev)}
            className="cursor-pointer"
          >
            <MdLiveTv className="w-4 h-4 ml-2" />
            {isLiveMode ? "توقف نظارت زنده" : "نظارت زنده"}
          </Button>
          <Button variant="outline" className="cursor-pointer bg-transparent">
            <MdRefresh className="w-4 h-4 ml-2" />
            بروزرسانی
          </Button>
          <Button className="cursor-pointer">
            <MdAdd className="w-4 h-4 ml-2" />
            چت روم جدید
          </Button>
        </div>
      }
    />
  );
}
