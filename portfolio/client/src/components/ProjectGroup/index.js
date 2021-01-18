import React from 'react';
import "./style.css";
import icebox from "../../images/icebox.png"

function ProjectGroup() {
    return(
        <div>
            <div className="project">
                <div className="project-image">
                    <img src={icebox} alt="icebox image"/>
                </div>
                <div className="project-desc">
                    <h1>Icebox</h1>
                    <p>Icebox is an app meant to act as an online sneaker encyclopedia. Shoes, and sneakers especially, have a massive secondary market. Limited edition shoes are highly sought after items which are often sold out within seconds and there are many consumers that seek information related to these shoes. In the Icebox app, users can search for a shoe, filter based on collaborator, release date, size, current prices and more. From there a user can select a shoe to view, and the user will be presesnted with more detailed information about the shoe. On this page users can leave public comments about the shoe, which introduces a minor social element. The app is built using HTML, CSS, and Javascript. The server is run with Node Package Manager, express.js, and MySQL. The database currently has over 200 shoes indexed. Icebox the result of a collaborative project between Morgan Wong, Yessica Perez, Jessica Crump, Shanni Suissa and myself.</p>
                    <div className="project-link-box">
                        <a href="#">Github Repo</a>
                        <br />
                        <a href="#">Heroku Deployment</a>
                    </div>
                </div>
            </div>

            <div className="project">
                <div className="project-image">

                </div>
                <div className="project-desc">
                    <h1>Project Title</h1>
                    <p>Project Description</p>
                </div>
            </div>

            <div className="project">
                <div className="project-image">

                </div>
                <div className="project-desc">
                    <h1>Project Title</h1>
                    <p>Project Description</p>
                </div>
            </div>

            <div className="project">
                <div className="project-image">

                </div>
                <div className="project-desc">
                    <h1>Project Title</h1>
                    <p>Project Description</p>
                </div>
            </div>

            <div className="project">
                <div className="project-image">

                </div>
                <div className="project-desc">
                    <h1>Project Title</h1>
                    <p>Project Description</p>
                </div>
            </div>

            <div className="project">
                <div className="project-image">

                </div>
                <div className="project-desc">
                    <h1>Project Title</h1>
                    <p>Project Description</p>
                </div>
            </div>
        </div>
    )
};

export default ProjectGroup;