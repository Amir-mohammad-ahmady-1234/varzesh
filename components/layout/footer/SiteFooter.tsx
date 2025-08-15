import React from "react";

import FooterCopyright from "./FooterCopyright";
import FooterContent from "./FooterContent";

function SiteFooter() {
  return (
    <div className="w-full md:w-[1344px] mx-auto ">
      <FooterContent />
      <hr className="text-neutral-100  " />
      <FooterCopyright />
    </div>
  );
}

export default SiteFooter;
