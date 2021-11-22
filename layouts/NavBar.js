import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    return (
        <div id="top" className="navBar">
            <div className="icone">
                <Link href="/">
                    <a>
                        <Image src="/img/Thiago Icone.png" alt="Ícone" width="300" height="300" layout="responsive"/>
                    </a>
                </Link>
            </div>
            <div className="menu">
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
                        <a>Projects</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;