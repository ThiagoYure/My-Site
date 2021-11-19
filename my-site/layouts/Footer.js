import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin, faBehanceSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

export default () => {
    return (
        <footer className="footer">
            <div className="topInfos">
                <div className="aboutSite">
                    <div className="logo">
                        <Link href="/">
                            <a>
                                <Image src="/Thiago Logo 3.png" height="123" width="300" layout="intrinsic" />
                            </a>
                        </Link>
                    </div>
                    <div className="aboutText">
                        Este site é feito com uma pitada de tempero, amor e tudo que há de bom, sem esquecer do ingrediente X.
                        Aqui você vai encontrar tudo de relevante sobre mim e  mais um pouco. Fique à vontade e sinta-se em casa.
                    </div>
                    <div className="socialMedia">
                        <Link href="https://github.com/ThiagoYure">
                            <a>
                                <FontAwesomeIcon icon={faGithubSquare} />
                            </a>
                        </Link>
                        <Link href="https://www.linkedin.com/in/thiagoyure/">
                            <a>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </Link>
                        <Link href="https://www.instagram.com/siegfrieddragon/">
                            <a>
                                <FontAwesomeIcon icon={faInstagramSquare} />
                            </a>
                        </Link>
                        <Link href="https://www.behance.net/siegfrieddragon">
                            <a>
                                <FontAwesomeIcon icon={faBehanceSquare} />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="links">
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
                <div className="newsLetter">
                    <div className="newsLetterText">
                        Inscreva-se pra receber emails com as novidades do site!
                    </div>
                    <div className="newsLetterForm">
                        <form>
                            <div>
                                <label>
                                    <input type="email" placeholder="Digite seu email aqui ..."/>
                                    {/*<input type="text" value={email} onChange={e => setEmail(e.target.value)} />*/}
                                </label>
                            </div>
                        </form>
                        <div className="buttons">
                            <a>Enviar</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottomInfos">
                <div className="copy">
                    &copy; Copyright 2021 Thiago Yure. Todos os Direitos Reservados
                </div>
            </div>
        </footer>
    );
}