import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    const [classMenu, setClassMenu] = useState("closed");
    const openMenu = () => {
        if (classMenu === "open") {
            setClassMenu("closed");
        } else if (classMenu === "closed") {
            setClassMenu("open");
        }
    }

    return (
        <div id="top" className="navBar">
            <div className="menu">
                <div className="icone">
                    <Link href="/">
                        <a>
                            <Image src="/Thiago Icone.png" alt="Ícone" width="300" height="300" layout="responsive" />
                        </a>
                    </Link>
                </div>
                <div className="menuIcon" onClick={() => {
                    openMenu();
                }}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
            <div className={"menuLinks " +  classMenu}>
                <div>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </div>
                <div>
                    <Link href="/Blog">
                        <a>Blog</a>
                    </Link>
                </div>
                <div>
                    <Link href="/Projects">
                        <a>Projetos</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;