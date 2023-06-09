import { faBehance, faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
    return (
        <section id="contactMeSection">
            <h2>_Vamos conversar?</h2>
            <div id="buttonsGroup">
                <a id="btTalvez" href="#" alt="">Talvez...</a>
                <a id="btSim" href="#" alt="">Sim!</a>
            </div>
            <img src="/images/contact-me-art.png" />
            <address>
                <div className="contact">
                    <div className="icon" >
                        <FontAwesomeIcon icon={faBehance} />
                    </div>
                    <p className="contactName">Behance</p>
                    <p>@siegfrieddragon</p>
                </div>
                <div className="contact">
                    <div className="icon" >
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </div>
                    <p className="contactName">LinkedIn</p>
                    <p>@thiagoyure</p>
                </div>
                <div className="contact">
                    <div className="icon" >
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <p className="contactName">Github</p>
                    <p>@ThiagoYure</p>
                </div>
                <div className="contact">
                    <div className="icon" >
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <p className="contactName">Instagram</p>
                    <p>@siegfrieddragon</p>
                </div>
            </address>
        </section>
    )
}