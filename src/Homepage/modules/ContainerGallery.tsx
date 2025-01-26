import React from "react";
import img1 from "/public/image1.png"
import img2 from "/public/image2.png"
import img3 from "/public/image3.png"
import img4 from "/public/image4.png"
import img5 from "/public/image5.png"
import img6 from "/public/image6.png"
import "./styles/ContainerGallery.scss"

const ContainerGallery: React.FC = () => {

    return (
        <div className="contGallery">
            <div className="part1">
                <img src={img1} alt="" />
            </div>
            <div className="part2">
                <div className="upperPart">
                    <img src={img2} alt="" />
                </div>
                <div className="lowerPart">
                    <img src={img3} alt="" />
                </div>
            </div>
            <div className="part1">
                <img src={img4} alt="" />
            </div>
            <div className="part2">
                <div className="upperPart">
                    <img src={img5} alt="" />
                </div>
                <div className="lowerPart">
                    <img src={img6} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ContainerGallery;