import React from "react";

export default function Contact({ default: { emailID, linkedinLink } }) {
    return (
        <div className="section center flex-column" id="Contact">
            <h1>CONTACT ME</h1>
            <div className="center flex-grow">
                <ul className="flex">
                    <li>
                        <button className="center width-auto font1rem" onClick={() => window.location.href = `mailto:${emailID}`}>
                            <i className="fa-solid fa-envelope"></i>{emailID}
                        </button></li>
                    <li><button className="center width-auto font1rem" onClick={() => window.open(linkedinLink, '_blank')}><i className="fa-brands fa-linkedin"></i>@{linkedinLink.split('/').pop()}</button></li>
                </ul>
            </div >
        </div >
    )
}