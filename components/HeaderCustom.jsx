import { faArrowAltCircleUp, faBars, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function HeaderCustom() {
    const [menuStatus, setmenuStatus] = useState(false);

    const handleMenuMobile = () => {
        const menu = document.getElementById('menuMobile');
        const status = !menuStatus;
        setmenuStatus(status);
        if (status) {
            menu.classList.remove("inactiveMenu");
            menu.classList.add("activeMenu");
        } else {
            menu.classList.remove("active");
            menu.classList.add("inactiveMenu");
        }
    }

    return (
        <header id="header">
            <img id="logoHeader" src="/images/logo.png" alt="Logo profissional de Thiago Yure" />
            <div id="menuTrigger" onClick={handleMenuMobile}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div id="menuMobile" className="inactiveMenu">
                <h3>_Menu</h3>
                <a href="#homeSection" className="menuItemMobile">Inicial</a>
                <a href="#skillsSection" className="menuItemMobile">Habilidades</a>
                <a href="#aboutMeSection" className="menuItemMobile">Sobre mim</a>
                <a href="#projectsSection" className="menuItemMobile">Projetos</a>
                <a href="#contactMeSection" className="menuItemMobile">Contato</a>
            </div>
            <div id="menu">
                <div id="navBar"></div>
                <a href="#homeSection" className="menuItem">
                    <span className="linkText caption">Inicial</span>
                    <div className="triangle"></div>
                </a>
                <a href="#skillsSection" className="menuItem">
                    <span className="linkText caption">Habilidades</span>
                    <div className="triangle"></div>
                </a>
                <a href="#aboutMeSection" className="menuItem">
                    <span className="linkText caption">Sobre mim</span>
                    <div className="triangle"></div>
                </a>
                <a href="#projectsSection" className="menuItem">
                    <span className="linkText caption">Projetos</span>
                    <div className="triangle"></div>
                </a>
                <a href="#contactMeSection" className="menuItem">
                    <span className="linkText caption">Contato</span>
                    <div className="triangle"></div>
                </a>
            </div>
            <a className="toTopLink" href="#header">
                <FontAwesomeIcon icon={faChevronUp} />
            </a>
        </header>
    )
}