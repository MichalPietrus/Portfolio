import React from "react";
import './Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PDF from "./MICHAŁ_PIETRUS_CV.pdf";


export default function Contact() {

    return (
        <footer id="contact" className="row no-gutters">
            <div className="container">
                <div className="row justify-content-between no-gutters">
                    <h2>Contact</h2>
                    <a rel="noopener noreferrer" target="_blank" href={PDF} className="btn" download>Download CV</a>
                </div>
                <p>
                    <i className="fas fa-map-marker-alt"/>
                    Kraków, Polska
                </p>
                <p>
                    <i className="fas fa-mobile-alt"/>
                    795 003 597
                </p>
                <p>
                    <i className="far fa-envelope"/>
                    michalpietrus133@gmail.com
                </p>
                <div className="row no-gutters justify-content-center">
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/MichalPietrus">
                        <i className="fab fa-github"/>
                    </a>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/michał-pietrus">
                        <i className="fab fa-linkedin"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}