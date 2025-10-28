import React from "react";
import Container from "../../components/common/Container";
import HomeDeepSearch from "../../components/pages/home/head/HomeDeepSearch";
import LiveViideo from "../../components/common/LiveViideo";
import HomeImageSlider from "../../components/pages/home/head/HomeImageSlider";
import HomeLiveresults from "../../components/pages/home/head/HomeLiveresults";
import HomeExercises from "../../components/pages/home/category/HomeExercises";
import HomeNews from "../../components/pages/home/news/HomeNews";
import ChatButton from "../../components/pages/home/ai/ChatButton";

function HomePage() {
  return (
    <Container className="flex flex-col space-y-8">
      <section className="flex flex-col gap-5">
        <div className="w-full h-52 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] rounded-lg overflow-hidden shadow-lg">
          <HomeImageSlider />
        </div>
        <div>
          <HomeLiveresults />
        </div>
      </section>

      <HomeDeepSearch />
      <HomeExercises />
      <LiveViideo />
      <HomeNews />

      <ChatButton />
    </Container>
  );
}

export default HomePage;
