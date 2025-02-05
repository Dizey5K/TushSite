import React from "react";
import "./styles/ContainerContact.scss"
import logoInst from "/logoInstagram.png"
import logoVk from "/logoVk.png"
import logoWhat from "/logoWhatsapp.png"

const yandexLinnk = "https://yandex.ru/map-widget/v1/?ll=44.507962%2C48.720849&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Nzg0ODc4MRJR0KDQvtGB0YHQuNGPLCDQktC-0LvQs9C-0LPRgNCw0LQsINC_0YDQvtGB0L_QtdC60YIg0JzQsNGA0YjQsNC70LAg0JbRg9C60L7QstCwLCA1IgoNWAMyQhU94kJC&z=16.04";

const ContainerContact: React.FC = () => {

    return (
        <div className="contContact">
            <div className="contInfoContact">
                <div className="contAdress">
                    Где нас найти?
                    <div className="first">
                        <p>Просп. Маршала Жукова, 5, 2 этаж.</p>
                        <p>С нетерпением ждем вас!</p>
                    </div>
                </div>
                <div className="contSocial">
                    А как связаться?
                    <div className="poleSocial" style={{marginTop: 15}}>
                        <img src={logoInst} alt="" />
                        <a href="https://vk.com/fedorovativa">vk.com/fedorovativa</a>
                    </div>
                    <div className="poleSocial">
                        <img src={logoVk} alt="" />
                        <a href="https://vk.com/fedorovativa">vk.com/fedorovativa</a>
                    </div>
                    <div className="poleSocial">
                        <img src={logoWhat} alt="" />
                        +7 (902) 313-98-74
                    </div>
                </div>
            </div>
            <div className="contMap">
                <iframe src={yandexLinnk} width="560" height="400" style={{position: "relative"}}></iframe>
            </div>
        </div>
    )
}

export default ContainerContact;