import React from "react";
import "./styles/ContainerSale.scss"

const ContainerSale: React.FC = () => {

    return (
        <div className="contSale">
            <div className="textSale">
            Лучший подарок для близкого человека
            <p>Сертификат на любые процедуры от 600 рублей</p>
            </div>
            <button className="buttonSale">Приобрести</button>
        </div>
    )
}

export default ContainerSale;