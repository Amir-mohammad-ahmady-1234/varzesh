import Image from "next/image";
import React from "react";
import SectionContainer from "../../../components/common/home/ContentHome";
import CategorySlider from "../../../components/pages/home/podcast/CategorySlider";
import PodcastsListSlider from "../../../components/pages/home/podcast/PodcastsListSlider";
import { GetPodcast } from "../../../server/user/paneluser/podcast/GetPodcast";

export default async function page() {
  const podcasts = await GetPodcast();

  return (
    <div className="flex flex-col gap-6 m-12">
      <div className="flex item-scnter justify-center">
        <Image
          src="/assets/img/home/Frame 1000001901.png"
          alt="radio penart"
          width={1250}
          height={300}
        />
      </div>

      <SectionContainer title="دسته بندی">
        <CategorySlider />
      </SectionContainer>

      <SectionContainer title="لیست پادکست ها">
        <PodcastsListSlider podcasts={podcasts} />
      </SectionContainer>

      <SectionContainer title="انلاین گوش کن">
        <Image
          src="/assets/img/podcast/Frame 1000001912.png"
          alt="listen online banner"
          width={1250}
          height={300}
        />
      </SectionContainer>
    </div>
  );
}
