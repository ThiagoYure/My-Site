import Link from "next/link";

const NavBar = () => {
    return (
        <div id="top" className="navBar">
            <div className="icone">
                <Link href="/">
                    <a>
                        <img src="/Thiago Icone.png" alt="Ícone"/>
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