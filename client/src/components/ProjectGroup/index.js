import React from 'react';
import "./style.css";
import icebox from "../../images/icebox.png"
import snippet from "../../images/snippet.PNG";

function ProjectGroup() {
    return(
        <div>
            <div className="project">
                <div className="project-image">
                    <img src={snippet} alt="this is a grab of Snippet.im"/>
                </div>
                <div className="project-desc">
                    <h1>Snippet</h1>
                    <p>Snippet is a full-stack React.js application with a MySQL database, routed with Express.js. The application stores snippets of code that developers may want to reference for future use. Users can sign up for an account, but they do not have to in order to search and browse through the snippets already in the database. Users do have to create an account to create code snippets and insert them into the database. When creating code, the user assigns a title, description and tags to make it easier for other users to search for and find. Commenting, likes, copies and other user data is tracked. The application was created by a group of 5 people, myself included. Development started January 11th of 2021 and continues for the forseeable future. My primary responsibilities in this project were creating API end points for our sequelize models, and creating the front-end and logic for the "create-code" page.</p>
                    <div className="project-link-box">
                        <a target="_blank" rel="noreferrer" href="http://www.snippet.ltd">Heroku Deployment</a>
                        <br />
                        <a target="_blank" rel="noreferrer" href="https://github.com/ma-wong/project-3/">Github Repo</a>
                    </div>
                </div>
            </div>

            <div className="project">
                <div className="project-image">
                    <img src={icebox} alt="this is a grab of icebox's homepage"/>
                </div>
                <div className="project-desc">
                    <h1>Icebox</h1>
                    <p>Icebox is an app meant to act as an online sneaker encyclopedia. Shoes, and sneakers especially, have a massive secondary market. Limited edition shoes are highly sought after items which are often sold out within seconds and there are many consumers that seek information related to these shoes. In the Icebox app, users can search for a shoe, filter based on collaborator, release date, size, current prices and more. From there a user can select a shoe to view, and the user will be presesnted with more detailed information about the shoe. On this page users can leave public comments about the shoe, which introduces a minor social element. The app is built using HTML, CSS, and Javascript. The server is run with Node Package Manager, express.js, and MySQL. The database currently has over 200 shoes indexed.</p>
                    <div className="project-link-box">
                        <a target="_blank" rel="noreferrer" href="https://github.com/brandonleepiercy/sneaker-wikipedia">Github Repo</a>
                        <br />
                        <a target="_blank" rel="noreferrer" href="https://infinite-castle-57105.herokuapp.com">Heroku Deployment</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectGroup;