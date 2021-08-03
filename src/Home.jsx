
import React from "react";
import web from "../src/images/pizzahut.png";

import Common from "./Common";

const Home = () => {
  return (
    <Common
      name=" Wellcome to Foodzz world"
      imgsrc={web}
      visit="/services"
      btnname="Order"
    />
  );
};

export default Home;
