import React from "react";
import "./HamNavbar.css";
import "./HamNavbarScript";

export default function HamNavbar({ default: { logoHeader } }) {
    return (
        <div className="ham-container">
            <div className="ham-nav-menu">
                <ul className="ham-nav-links">
                    <li><a href="#Experience">Experience</a></li>
                    <li><a href="#LiveDemo">Live Demo</a></li>
                    <li><a href="#GithubProjects">Github Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                    <li><i className="fa-solid fa-xmark close-btn"></i></li>
                </ul>
            </div>
            <div className="ham-navbar">
            <div className="profile-btn logo font3rem">
                <a href="#Profile">{logoHeader}</a>
            </div>
                <i className="fa-solid fa-bars menu-btn"></i>
            </div>
        </div>
    );
}