import logo from "/public/logo.png"
import "./styles/Navbar.scss"

export const Navbar: React.FC = () => {

    return (
        <div className="navbar">
            <a href="#" className="logo">
                <img src={logo} alt="logo" className="logo" />
            </a>
            <div className="pages">
                <a className="page pageActive" href="#">Услуги</a>
                <a className="page" href="#">Галерея</a>
                <a className="page" href="#">О нас</a>
                <a className="page" href="#">Контакты</a>
            </div>
        </div>
    )
}