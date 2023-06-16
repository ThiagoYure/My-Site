import { faBehance, faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
    return (
        <section id="contactMeSection">
            <h2>_Vamos conversar?</h2>
            <div id="buttonsGroup">
                <a id="btTalvez" href="https://www.instagram.com/siegfrieddragon/" alt="" target="_blank">Talvez...</a>
                <a id="btSim" href="https://www.linkedin.com/in/thiagoyure/" alt="" target="_blank">Sim!</a>
            </div>
            <img src="/images/contact-me-art.png" />
            <address>
                <a className="contact" href="https://www.behance.net/siegfrieddragon" alt="Link para o Behance" target="_blank">
                    <div className="icon" >
                        <FontAwesomeIcon icon={faBehance} />
                    </div>
                    <p className="contactName">Behance</p>
                    <p>@siegfrieddragon</p>
                </a>
                <a className="contact" href="https://www.linkedin.com/in/thiagoyure/" alt="Link para o LinkedIn" target="_blank">
                    <div className="icon" >
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </div>
                    <p className="contactName">LinkedIn</p>
                    <p>@thiagoyure</p>
                </a>
                <a className="contact" href="https://github.com/ThiagoYure" alt="Link para o Github" target="_blank">
                    <div className="icon" >
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <p className="contactName">Github</p>
                    <p>@ThiagoYure</p>
                </a>
                <a className="contact" href="https://www.instagram.com/siegfrieddragon/" alt="Link para o Instagram" target="_blank">
                    <div className="icon" >
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <p className="contactName">Instagram</p>
                    <p>@siegfrieddragon</p>
                </a>
            </address>
        </section>
    )
}