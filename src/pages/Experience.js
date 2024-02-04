import React from "react";
import { useMediaQuery } from 'react-responsive';

export default function Experience({ default: { experience } }) {
    const isSmallScreen = useMediaQuery({ maxWidth: 700 });

    return (
        <div className="section center flex-column" id="Experience">
            <h1>EXPERIENCE</h1>
            <div className={`center flex-column flex-grow ${isSmallScreen ? 'justify-content-start padding-top-10' : 'padding-left-right'}`}>
                <ul>
                    {
                        experience.map((skillName, index) => <li key={index}>{skillName}</li>)
                    }
                </ul>
            </div>
        </div>
    );
}