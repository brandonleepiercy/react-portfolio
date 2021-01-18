import React from 'react';
import "./style.css";
import icebox from "../../images/icebox.png"
import raffleApp from "../../images/raffle-app.png";
import whiteRabbit from "../../images/white-rabbit.PNG";
import ems from "../../images/ems.PNG";

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
                        <a target="_blank" href="https://github.com/brandonleepiercy/sneaker-wikipedia">Github Repo</a>
                        <br />
                        <a target="_blank "href="https://infinite-castle-57105.herokuapp.com">Heroku Deployment</a>
                    </div>
                </div>
            </div>

            <div className="project">
                <div className="project-image">
                    <img src={raffleApp} alt="raffle-app image"/>
                </div>
                <div className="project-desc">
                    <h1>Raffle App</h1>
                    <p>This is a lightweight javascript/mysql application that can help an individual/organization manage a raffle. The application serves two webpages. The landing page, where people who want to enter the giveaway can submit their usernames, and another page where the manager of the raffle can view all of the entries, edit and delete the entries, as needed. Users cannot enter a blank username, and they cannot enter a username that already exists in the mysql database. The app follows the MVC paradigm and is built using Javascript, HTML, NPM, express.js and MySQL.</p>
                    <div className="project-link-box">
                        <a target="_blank" href="https://github.com/brandonleepiercy/raffle-app">Github Repo</a>
                    </div>
                </div>
            </div>

            <div className="project">
                <div className="project-image">
                    <img src={whiteRabbit} alt="white rabbit image"/>
                </div>
                <div className="project-desc">
                    <h1>White Rabbit</h1>
                    <p>A simple browser-based application which pulls information from a variety of APIs and organizes them into a monthly calendar format. Information pulled includes SPY price at market close, geolocation based weather data for the previous five days and COVID-19 infection totals in the United States. Users can also type in their own events into the calendar, and user tasks are stored locally, so users can use the site as an actual calendar. The intention was to create a simple home page which combines all the different sources of information that a professional adult may want to check on a daily basis, into one website. Future functionality should include richer data tracking, more API options to populate the calendar with, and another more detailed window that users can interact with when they click each cell in the calendar. This project was a collaboration between Lawson Kelly, Javier Caro, Tito Rivera, Kyle Gibson and me.</p>
                    <div className="project-link-box">
                        <a target="_blank" href="https://github.com/brandonleepiercy/project-1">Github Repo</a>
                        <br />
                        <a target="_blank" href="https://brandonleepiercy.github.io/project-1/">Github Deployment</a>
                    </div>
                </div>
            </div>

            <div className="project">
                <div className="project-image">
                    <img src={ems} alt="ems image"/>
                </div>
                <div className="project-desc">
                    <h1>Employee Management System</h1>
                    <p>The Employee Management System app is a Command Line Interface application running on Javascript utilizing a MySQL server. The app utilizes a series of inquirer prompts to help the user navigate through the CLI in order to add, view, or update departments, roles, or employess. The inquirer prompts are connected to MySQL tables through connection queries which select, update and insert into the corresponding database. A schema file is provided within this repository which will automatically set up the corresponding SQL database. The app also uses figlet to generate a splash screen when the program is initialized. </p>
                    <div className="project-link-box">
                        <a target="_blank" href="https://github.com/brandonleepiercy/employee-management-system">Github Repo</a>
                    </div>
                </div>
            </div>

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
        </div>
    )
};

export default ProjectGroup;