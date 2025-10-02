"use client";
import React, { useState } from "react";
import { MdDownload, MdRefresh } from "react-icons/md";
import PageHeader from "../ui/PageHeader";
import Button from "../Button";
import { BiLogoDigitalocean } from "react-icons/bi";
import NewPodcastModal from "../../pages/adminpanel/pages/podcast/NewPodcastModal";

interface Props {
  title: string;
  desc: string;
}

export default function PageTitlePodcast({ title, desc }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <PageHeader
      title={title}
      description={desc}
      action={
        <div className="flex items-center gap-2">
          <Button variant="outline" className="cursor-pointer bg-transparent">
            <MdDownload className="w-4 h-4 ml-2" />
            خروجی CSV
          </Button>
          <Button variant="outline" className="cursor-pointer bg-transparent">
            <MdRefresh className="w-4 h-4 ml-2" />
            بروزرسانی
          </Button>
          <Button
            onClick={() => setIsModalOpen((prev) => !prev)}
            variant="outline"
            className="cursor-pointer bg-transparent"
          >
            <BiLogoDigitalocean className="w-4 h-4 ml-2" />
            پادکست جدید
          </Button>
          <NewPodcastModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      }
    />
  );
}

