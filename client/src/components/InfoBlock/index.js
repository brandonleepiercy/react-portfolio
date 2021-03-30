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
                <p>I began learning how to develop software in October of 2020 through UCLA, and in 4 challenging months, I have gone from knowing nothing about software development to being able to develop and maintain a full-stack web application on my own. It was a difficult process, but I enjoy challenges and that made the journey a lot more rewarding. Aside from software, in 2020 I graduated with a B.A. in Communication from UCSB, where I also completed courses in Economics, Accounting and Technology Management for my own benefit. On the weekends, for the past two years I've been fixing and modifying my car in my parking spot. I attend track events with my car whenever I can, and I'm hoping to be licensed by the SCCA for GTA and GRID racing soon.</p>
                <h1>Skills:</h1>
                <ul>
                    <li>React.js</li>
                    <li>Node.js and Express.js</li>
                    <li>MySQL and Sequelize</li>
                    <li>MongoDB, Mongoose and Atlas</li>
                    <li>HTML, CSS and Bootstrap</li>
                    <li>CSS FlexBoxes and Grids</li>
                    <li>Javascript and JQuery</li>
                    <li>API construction (REST and SOAP)</li>
                    <li>Git Flow, Branch Management</li>
                    <li>Data Structures and Algorithms</li>
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