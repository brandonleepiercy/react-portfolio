import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";


class Nav extends Component {
    state = {
        page: "",
        buttonsNeeded: ["", "", ""]
    };

    toggleNav = (event) => {
        let buttonClicked = event.target.name;
        window.location = `/${buttonClicked}`;
    };

    updateButtons = () => {
        let location = window.location.pathname.toString();
        let currentPage = location.substr(1).slice(0, -1);
        console.log(currentPage);
        console.log(location);
        switch (currentPage) {
            case "Home":
                this.setState({
                    page: currentPage,
                    buttonsNeeded: ["About", "Projects", "Contact"]
                });
                break;
            case "About":
                this.setState({
                    page: currentPage,
                    buttonsNeeded: ["Home", "Projects", "Contact"]
                });
                break;
            case "Projects":
                this.setState({
                    page: currentPage,
                    buttonsNeeded: ["Home", "About", "Contact"]
                });
                break;
            case "Contact":
                this.setState({
                    page: currentPage,
                    buttonsNeeded: ["Home", "About", "Projects"]
                });
                break;
            default:
                this.setState({
                    page: currentPage,
                    buttonsNeeded: ["About", "Projects", "Contact"]
                });
        }
    }

    componentDidMount() {
        window.addEventListener("load", this.updateButtons);
    }

    render() {
        return (
            <div>
                <div className="row nav-row">
                    <div className="col-sm d-flex justify-content-center">
                        <button className="nav-button"
                        onClick={this.toggleNav}
                        name={this.state.buttonsNeeded[0]}
                        >{this.state.buttonsNeeded[0]}</button>
                    </div>
    
                    <div className="col-sm d-flex justify-content-center">
                        <button className="nav-button"
                        onClick={this.toggleNav}
                        name={this.state.buttonsNeeded[1]}
                        >{this.state.buttonsNeeded[1]}</button>
                    </div>
    
                    <div className="col-sm d-flex justify-content-center">
                        <button className="nav-button"
                        onClick={this.toggleNav}
                        name={this.state.buttonsNeeded[2]}
                        >{this.state.buttonsNeeded[2]}</button>
                    </div>
                </div>
            </div>
        )
    };
};

export default Nav;