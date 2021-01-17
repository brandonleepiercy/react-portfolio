import React from 'react';
import "./style.css";
import logo from "../../images/BLP-logo-footer.png";

function Footer() {
    return(
        <footer>
            <div class="inner-footer">

                <div class="logo-container">
                    <img src={logo} alt="BP logo"/>
                </div>

                <div class="footer-third">
                    <h1>Nav</h1>
                    <a href="https://www.linkedin.com/in/brandon-piercy-8713a1130/">Home</a>
                    <a href="https://github.com/brandonleepiercy/">About</a>
                    <a href="https://www.linkedin.com/in/brandon-piercy-8713a1130/">Projects</a>
                    <a href="https://github.com/brandonleepiercy/">Contact</a>
                </div>

                <div class="footer-third">
                    <h1>Links</h1>
                    <a href="https://www.linkedin.com/in/brandon-piercy-8713a1130/">LinkedIn</a>
                    <a href="https://github.com/brandonleepiercy/">GitHub</a>
                </div>

                <div class="footer-third">
                    <h1>Proudly built with</h1>
                    <p>React.js, MongoDB, Express/Node, Javascript and deployed with Heroku.</p>
                </div>

            </div>
        </footer>
    )
};

export default Footer;