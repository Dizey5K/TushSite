import React from "react";
import "./styles/ContainerSecond.scss"
import ButtonList from "./ButtonLIst";

export const ContainerSecond: React.FC = () => {
    const serviceTypes = [
        { text: 'Массаж', imageUrl: '/public/imageLeftCont.png'},
        { text: 'Татуаж', imageUrl: '/public/imageLeftCont.png'},
        { text: 'Косметология', imageUrl: '/public/imageLeftCont.png'},
        { text: 'Маникюр и Педикюр', imageUrl: '/public/imageLeftCont.png'},
        { text: 'Восстановление волос', imageUrl: '/public/imageLeftCont.png'},
        { text: 'Брови и Ресницы', imageUrl: '/public/imageLeftCont.png'}
    ]

    return (
        <div className="mainContSecond">
            <ButtonList buttonItems={serviceTypes}/>
        </div>
    )
}