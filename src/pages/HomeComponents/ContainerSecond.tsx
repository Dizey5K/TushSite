import React from "react";
import "./HomeStyles/ContainerSecond.scss"
import ButtonList from "./ButtonLIst";

export const ContainerSecond: React.FC = () => {
    const serviceTypes = [
        { text: 'Массаж', imageUrl: '/imageLeftCont.png'},
        { text: 'Татуаж', imageUrl: '/imageLeftCont.png'},
        { text: 'Косметология', imageUrl: '/imageLeftCont.png'},
        { text: 'Маникюр и Педикюр', imageUrl: '/imageLeftCont.png'},
        { text: 'Восстановление волос', imageUrl: '/imageLeftCont.png'},
        { text: 'Брови и Ресницы', imageUrl: '/imageLeftCont.png'}
    ]

    return (
        <div className="mainContSecond">
            <ButtonList buttonItems={serviceTypes}/>
        </div>
    )
}