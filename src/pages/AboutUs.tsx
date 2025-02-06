import React from "react";
import { Navbar } from "../components/Navbar";
import ContainerContact from "./HomeComponents/ContainerContact";

const AboutUs: React.FC = () => {
  return (
    <body>
      <Navbar pageIndex={2} />
      <ContainerContact />
    </body>
  );
};

export default AboutUs;
