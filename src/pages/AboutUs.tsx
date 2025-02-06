import React from "react";
import { Navbar } from "../components/Navbar";
import ContainerContact from "./HomeComponents/ContainerContact";
import { ContainerFirst } from "./HomeComponents/ContainerFirst";

const AboutUs: React.FC = () => {
    return (
        <body>
            <Navbar pageIndex={2}/> 
            <ContainerFirst />
            <ContainerContact />
        </body>
    )
}

export default AboutUs;