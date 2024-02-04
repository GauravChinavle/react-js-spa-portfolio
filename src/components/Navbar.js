import React from "react";

export default function Navbar({ default: {logoHeader}}) {
    return (
        <div className="navbar-container">
            <div className="logo">
                <a href="#Profile">{logoHeader}</a>
            </div>
            <div className="nav-links">
                <ul>
                    <li><a href="#Experience">Experience</a></li>
                    <li><a href="#LiveDemo">Live Demo</a></li>
                    <li><a href="#GithubProjects">Github Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}