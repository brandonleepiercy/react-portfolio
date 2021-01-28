import React from 'react';
import './style.css';
import logo from "../../images/BLP-logo-footer.png";

function Footer() {
    return(
        <footer>
            <div className="inner-footer">

                <div className="logo-container">
                    <a href="/home"><img src={logo} alt="simple square logo featuring my initials"/></a>
                </div>

                <div className="footer-third">
                    <h1>Nav</h1>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/projects">Projects</a>
                    <a href="/contact">Contact</a>
                </div>

                <div className="footer-third">
                    <h1>Links</h1>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/brandon-piercy-8713a1130/">LinkedIn</a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/brandonleepiercy/">GitHub</a>
                </div>

                <div className="footer-third">
                    <h1>Proudly built with</h1>
                    <p>React.js, MongoDB, Express/Node, Javascript and deployed with AWS.
                    Designed and built by Brandon Lee Piercy, 2021.
                    </p>
                </div>

            </div>
        </footer>
    )
};

export default Footer;