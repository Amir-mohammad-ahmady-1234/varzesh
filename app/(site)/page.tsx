import React from "react";
import Container from "../../components/common/Container";
import HomeImageSlider from "../../components/pages/home/HomeImageSlider";
import HomeLiveresults from "../../components/pages/home/HomeLiveresults";
import HomeDeepSearch from "../../components/pages/home/head/HomeDeepSearch";
import HomeNews from "../../components/pages/home/news/HomeNews";
import LiveViideo from "../../components/common/LiveViideo";
import HomeExercises from "../../components/pages/home/category/HomeExercises";

function page() {
  return (
    <Container>
      <HomeLiveresults />
      <HomeImageSlider />
      <HomeDeepSearch />
      <HomeExercises />
      <LiveViideo />
      <HomeNews />
    </Container>
  );
}

export default page;
