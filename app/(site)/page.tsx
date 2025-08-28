import React from "react";
import Container from "../../components/common/Container";
import HomeImageSlider from "../../components/pages/home/HomeImageSlider";
import HomeLiveresults from "../../components/pages/home/HomeLiveresults";

function page() {
  return (
    <Container>
      <HomeLiveresults />
      <HomeImageSlider />
    </Container>
  );
}

export default page;
