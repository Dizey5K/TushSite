import React from "react"
import "./styles/ContainerFirst.scss"
import firstImg from "/img1cont.png"

export const ContainerFirst: React.FC = () => {

    return (
    <div className="cont">
        <div className="upperCont">
            <div className="leftCont">
            Салон красоты Тушь
            </div>
            <div className="rightCont">
            Здесь исполняются ваши мечты
            </div>
        </div>
        <div className="mainCont">
            <img src={firstImg} alt="" className="mainCont"/>
        </div>
    </div>
    )
}