import React from 'react';
import "./style.css";
import me from "../../images/me.jpg";
import resume from "../../assets/Resume.pdf";

function InfoBlock() {
    return(
        <div className = "fl-container green-back">
            <div className = "box box-1">
                <h1>Brandon Lee Piercy</h1>
                <img src={me} alt="me"/>
            </div>
            <div className = "box box-2">
                <h1>About Me:</h1>
                <p>I began learning how to develop software in October of 2020 through UCLA, and in 4 challenging months, I have gone from knowing nothing about software development to being able to develop and maintain a full-stack web application on my own. It was not easy by any means, but seemingly insurmountable challenges are one of the few things I find rewarding. Aside from software, in 2020 I graduated from UCSB with a B.A. in Communication, and I am a self-taught mechanic. For the past two years I've been fixing and upgrading my 2013 VW CC in my parking spot, and I track it at Willow Springs/Buttonwillow when I have the time.</p>
                <h1>Skills:</h1>
                <ul>
                    <li>React.js</li>
                    <li>Node.js, Express.js and Express-Handlebars</li>
                    <li>MySQL and Sequelize</li>
                    <li>MongoDB, Mongoose and Atlas</li>
                    <li>HTML, CSS and Bootstrap</li>
                    <li>CSS Flex and Grids</li>
                    <li>Javascript and JQuery</li>
                    <li>API Interaction/ AJAX and Axios</li>
                    <li>Git Flow, Branch Management</li>
                    <li>App Deployment</li>
                    <li>Performance Optimization/ Repo Minimization</li>
                    <li>SEO</li>
                </ul>
                <h1>Resume:</h1>
                <a href={resume}>PDF Link</a>
            </div>
        </div>
    )
};

export default InfoBlock;