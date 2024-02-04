import React from "react";
import { getYears, scrollTo } from "../utils";
import { ReactTyped } from "react-typed";

export default function Profile({ default: { name, designation, qualification, linkedinLink, githubLink, workingStartDate } }) {
    return (
        <div className="section center" id="Profile">
            <div className="center">
                <img src="/assets/profile-pic.png" alt="profile" className="profileImg"/>
            </div>

            <div className="center" id="description">
                <ul>
                    <li>Hello I'm</li>
                    <li className="profile-name">{name}</li>
                    <li className="font2rem"><ReactTyped strings={[designation, qualification]} typeSpeed={100} backSpeed={100} loop /></li>
                    <li>{`with ${getYears(workingStartDate)} years of experience`}</li>
                    <li><button className="light-yellow" onClick={() => window.open('/assets/resume.pdf')}>DOWNLOAD CV</button><button id="inlineScrollButton" onClick={(e) => scrollTo('Contact')}>CONTACT ME</button></li>
                    <li><i className="fa-brands fa-linkedin" onClick={() => window.open(linkedinLink, '_blank')}></i><i className="fa-brands fa-square-github" onClick={() => window.open(githubLink, '_blank')}></i></li>
                </ul>
            </div>
        </div>
    );
}