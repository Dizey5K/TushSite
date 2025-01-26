import logo from "/logo.png"
import "./styles/Navbar.scss"
import useWindowWidth from "./hooks/WindowWidth";
import HamburgerButton from "./HumbergerButton";

export const Navbar: React.FC = () => {
    const windowWidth = useWindowWidth();

    const hideNavbar = windowWidth > 900;

    return (
        <div className="navbar">
            <a href="#" className="logo">
                <img src={logo} alt="logo" className="logo" />
            </a>
            {hideNavbar && 
            <div className="pages">
                <a className="page pageActive" href="#">Услуги</a>
                <a className="page" href="#">Галерея</a>
                <a className="page" href="#">О нас</a>
                <a className="page" href="#">Контакты</a>
            </div>}
            {!hideNavbar && 
            <HamburgerButton/>
            
            }
        </div>
    )
}