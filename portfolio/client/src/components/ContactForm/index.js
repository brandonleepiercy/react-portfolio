import React from 'react';
import "./style.css";

function ContactForm() {
    return(
        <div className = "contact-background">
            <div className= "contact-box">
                <h1>Contact</h1>
                <form class="email-form">
                    <input type="text" id="email" name="email" placeholder="Enter a valid email address."/><br/>
                    <textarea rows="4" cols="45" name="message" id="message" placeholder="Enter a message (required)."/><br/>
                    <button id="email-submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;