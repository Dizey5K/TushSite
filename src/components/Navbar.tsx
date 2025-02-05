import logo from "/logo.png"
import "./ComponentsStyles/Navbar.scss"
import useWindowWidth from "../hooks/WindowWidth";
import HamburgerButton from "./HumbergerButton";

interface ActivePage {
    pageIndex: number | null;
}

const pageItems = [
    {name: "Услуги", link: "#"},
    {name: "Галерея", link: "#"},
    {name: "О нас", link: "/about"},
    {name: "Контакты", link: "#"}
]   

export const Navbar: React.FC<ActivePage> = ({pageIndex}) => {
    const windowWidth = useWindowWidth();
    
    const hideNavbar = windowWidth > 900;

    return (
        <div className="navbar">
            <a href="/home" className="logo">
                <img src={logo} alt="logo" className="logo" />
            </a>
            {hideNavbar && 
            <div className="pages">
                {pageItems.map((item, index) => (
                    <a 
                    href={item.link}
                    className={pageIndex === index ? "page pageActive" : "page"}>
                        {item.name}
                    </a>
                ))}
            </div>}
            {!hideNavbar && 
            <HamburgerButton/>
            }
        </div>
    )
}