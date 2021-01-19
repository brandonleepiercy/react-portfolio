import React, { useState } from 'react';
import "./style.css";
import API from "../../utils/API.js";

function ContactForm() {

    const [email, setEmail] = useState({
        email: '',
        note: ''
    });

    function emailIsValid(email) {
        return /\S+@\S+\.\S+/.test(email)
    };

    function handleInputChange(event) {
        const { name , value } = event.target;
        setEmail({
            ...email,
            [name]:value
        });
    };

    function verifySubmit(event) {
        event.preventDefault();
        var submittedEmail = event.target.parentElement.children[0].value;
        var submittedNote = event.target.parentElement.children[2].value;

        if (emailIsValid(submittedEmail)===true && submittedNote !== null) {
            setEmail({
                email: submittedEmail,
                note: submittedNote
            }, send(submittedEmail, submittedNote));
        } else if (emailIsValid(submittedEmail)===false) {
            alert("Please submit a valid e-mail");
        } else if (submittedNote == null) {
            alert("Please add a note");
        } else {
            alert("Error, check the submission fields.");
        }
    };

    function send(email, note) {
        API.storeContact({
            email: email,
            note: note
        }).then(res => {console.log(res)});
    };

    return(
        <div className = "contact-background">
            <div className= "contact-box">
                <h1>Contact</h1>
                <form className="email-form">
                    <input type="text" id="email" name="email" placeholder="Enter a valid email address." onChange={handleInputChange}/><br/>
                    <textarea rows="4" cols="45" name="note" id="note" placeholder="Enter a message (required)." onChange={handleInputChange}/><br/>
                    <button id="email-submit" onClick={verifySubmit}>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;