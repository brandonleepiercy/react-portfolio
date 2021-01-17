import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";


class Nav extends Component {
    render() {
        return (
            <div>
                <div class="row nav-row">
                    <div class="col-sm d-flex justify-content-center">
                        <button class="nav-button">About</button>
                    </div>
    
                    <div class="col-sm d-flex justify-content-center">
                        <button class="nav-button">Projects</button>
                    </div>
    
                    <div class="col-sm d-flex justify-content-center">
                        <button class="nav-button">Contact</button>
                    </div>
                </div>
            </div>
        )
    };
};

export default Nav;