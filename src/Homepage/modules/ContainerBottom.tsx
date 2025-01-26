import React from "react";
import logo from "/logo.png";
import "./styles/ContainerBottom.scss"

const ContainerBottom: React.FC = () => {

    return (
        <div className="contBottom">
            <div className="upperBottom">
                <img src={logo} alt="" />
            </div>
            <div className="lowerBottom">
                <p>designed & built by Fedorov Oleg</p>
                <p>(@dizey5k)</p>
            </div>
        </div>
    )
}

export default ContainerBottom;