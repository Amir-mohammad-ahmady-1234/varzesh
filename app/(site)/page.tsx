import React from "react";
import Container from "../../components/common/Container";
import HomeDeepSearch from "../../components/pages/home/head/HomeDeepSearch";
import LiveViideo from "../../components/common/LiveViideo";
import HomeImageSlider from "../../components/pages/home/head/HomeImageSlider";
import HomeLiveresults from "../../components/pages/home/head/HomeLiveresults";
import HomeExercises from "../../components/pages/home/category/HomeExercises";
import HomeNews from "../../components/pages/home/news/HomeNews";

function HomePage() {
  return (
    <Container className="flex flex-col ">
      <section className="flex gap-5">
        <div className="w-2/3">
          <HomeImageSlider />
        </div>
        <div className="w-1/3 ">
          <HomeLiveresults />
        </div>
      </section>
      <HomeDeepSearch />
      <HomeExercises />
      <LiveViideo />
      <HomeNews />
    </Container>
  );
}

export default HomePage;
