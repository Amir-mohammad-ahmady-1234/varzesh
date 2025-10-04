import React from "react";
import CardSiwper from "../../components/pages/home/video/Card/CardSiwper";
import { onlineVideos } from "../../mocks/card";
import SectionContainer from "./home/ContentHome";

function LiveViideo() {
  return (
    <section className="mb-10">
      <div className="space-y-5">
        <SectionContainer title="پخش زنده">
          <CardSiwper cards={onlineVideos} />
        </SectionContainer>
      </div>
    </section>
  );
}

export default LiveViideo;
