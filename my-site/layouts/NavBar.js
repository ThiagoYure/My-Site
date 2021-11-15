import Link from "next/link";
import Image from "next/image";

export default () => {
    return (
        <div id="top" className="navBar">
            <div className="icone">
                <Link href="/">
                    <a>
                        <Image src="/Thiago Icone.png" height="40" width="40" layout="responsive" />
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