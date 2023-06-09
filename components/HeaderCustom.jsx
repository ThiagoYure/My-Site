import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderCustom() {
    return (
        <header>
            <img id="logoHeader" src="/images/logo.png" alt="Logo profissional de Thiago Yure" />
            <div id="menuTrigger">
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div id="menuMobile">
                <div className="menuItemMobile">Inicial</div>
                <div className="menuItemMobile">Habilidades</div>
                <div className="menuItemMobile">Sobre mim</div>
                <div className="menuItemMobile">Projetos</div>
                <div className="menuItemMobile">Contato</div>
            </div>
            <div id="menu">
                <div className="menuItem">Inicial</div>
                <div className="menuItem">Habilidades</div>
                <div className="menuItem">Sobre mim</div>
                <div className="menuItem">Projetos</div>
                <div className="menuItem">Contato</div>
            </div>
        </header>
    )
}