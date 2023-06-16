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
                <a href="#homeSection" rel="tag" className="menuItemMobile">Inicial</a>
                <a href="#skillsSection" rel="tag" className="menuItemMobile">Habilidades</a>
                <a href="#aboutMeSection" rel="tag" className="menuItemMobile">Sobre mim</a>
                <a href="#projectsSection" rel="tag" className="menuItemMobile">Projetos</a>
                <a href="#contactMeSection" rel="tag" className="menuItemMobile">Contato</a>
            </div>
            <div id="menu">
                <div id="navBar"></div>
                <a href="#homeSection" rel="tag" className="menuItem">
                    <span className="linkText caption">Inicial</span>
                    <div className="triangle"></div>
                </a>
                <a href="#skillsSection" rel="tag" className="menuItem">
                    <span className="linkText caption">Habilidades</span>
                    <div className="triangle"></div>
                </a>
                <a href="#aboutMeSection" rel="tag" className="menuItem">
                    <span className="linkText caption">Sobre mim</span>
                    <div className="triangle"></div>
                </a>
                <a href="#projectsSection" rel="tag" className="menuItem">
                    <span className="linkText caption">Projetos</span>
                    <div className="triangle"></div>
                </a>
                <a href="#contactMeSection" rel="tag" className="menuItem">
                    <span className="linkText caption">Contato</span>
                    <div className="triangle"></div>
                </a>
            </div>
            <a className="toTopLink" rel="tag" href="#header">
                <FontAwesomeIcon icon={faChevronUp} />
            </a>
        </header>
    )
}