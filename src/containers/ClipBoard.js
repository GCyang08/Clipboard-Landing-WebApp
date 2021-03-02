import React from "react";
import "./ClipBoard.css";

import Intro from "../components/Intro/Intro";
import Desktop from "../components/Desktop/Desktop";
import Access from "../components/Access/Access";
import Workflow from "../components/Workflow/Workflow";
import Testimonials from "../components/Testimonials/Testimonials";
import Downloads from "../components/Downloads/Downloads";
import Footer from "../components/Footer/Footer";

function ClipBoard() {
  return (
    <div className="Topimg">
      <Intro />
      <Desktop />
      <Access />
      <Workflow />
      <Testimonials />
      <Downloads />
      <Footer />
    </div>
  );
}

export default ClipBoard;
