import React from "react";
import { Navbar } from "../components/Navbar";
import { ContainerFirst } from "./HomeComponents/ContainerFirst";
import { ContainerSecond } from "./HomeComponents/ContainerSecond";
import ContainerGallery from "./HomeComponents/ContainerGallery";
import ContainerSale from "./HomeComponents/ContainerSale";
import ContainerContact from "./HomeComponents/ContainerContact";
import ContainerBottom from "./HomeComponents/ContainerBottom";

const Home: React.FC = () => {

    return (
        <body>
        <Navbar pageIndex={null}/>
        <ContainerFirst/>
        <ContainerSecond/>
        <ContainerGallery/>
        <ContainerSale/>
        <ContainerContact/>
        <ContainerBottom/>
      </body>
    )
}

export default Home;