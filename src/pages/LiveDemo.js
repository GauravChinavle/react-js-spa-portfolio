import React from "react";
import { useMediaQuery } from 'react-responsive';

export default function Experience({ default: { liveDemos } }) {
    const isSmallScreen = useMediaQuery({ maxWidth: 700 });

    return (
        <div className="section center flex-column" id="LiveDemo">
            <h1>LIVE DEMO</h1>
            <div className={`center flex-grow gap-20 ${isSmallScreen ? 'justify-content-start padding-top-10' : ''}`} id="card-container">
                {
                    liveDemos?.map(({ title, imagePath, githubLink, url}, index) => {
                        const key = title + index;
                        return (
                            <div className="center flex-column card width-auto" key={key}>
                            <img src={imagePath} alt={title} />
                            <h3>{title}</h3>
                            <p>
                                <i className="fa-brands fa-square-github" onClick={() => window.open(githubLink, '_blank')} ></i>
                                <i className="fa-solid fa-square-arrow-up-right" onClick={() => window.open(url, '_blank')}></i>
                            </p>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    );
}