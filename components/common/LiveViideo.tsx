import React from "react";
import CardVideo from "../pages/home/video/CardVideo";
import CardSiwper from "../../components/pages/home/video/Card/CardSiwper";
import { onlineVideos } from "../../mocks/card";

function LiveViideo() {
  return (
    <section className="mb-10">
      <div className="space-y-5">
        <CardVideo title="پخش زنده">
          <CardSiwper cards={onlineVideos} />
        </CardVideo>
      </div>
    </section>
  );
}

export default LiveViideo;
