import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function HeaderCustom() {
    const [menuStatus, setmenuStatus] = useState(false);

    const handleMenuMobile = () => {
        const menu = document.getElementById('menuMobile');
        const status = !menuStatus;
        setmenuStatus(status);
        if(status){
            menu.classList.remove("inactiveMenu");
            menu.classList.add("activeMenu");
        }else {
            menu.classList.remove("active");
            menu.classList.add("inactiveMenu");
        }
    }

    return (
        <header>
            <img id="logoHeader" src="/images/logo.png" alt="Logo profissional de Thiago Yure" />
            <div id="menuTrigger" onClick={handleMenuMobile}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div id="menuMobile" className="inactiveMenu">
                <div className="menuItemMobile">Inicial</div>
                <div className="menuItemMobile">Habilidades</div>
                <div className="menuItemMobile">Sobre mim</div>
                <div className="menuItemMobile">Projetos</div>
                <div className="menuItemMobile">Contato</div>
            </div>
            <div id="menu" className="inactiveMenu">
                <div className="menuItem">Inicial</div>
                <div className="menuItem">Habilidades</div>
                <div className="menuItem">Sobre mim</div>
                <div className="menuItem">Projetos</div>
                <div className="menuItem">Contato</div>
            </div>
        </header>
    )
}