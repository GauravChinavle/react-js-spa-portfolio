import React, { useEffect, useState } from "react";
import { fetchGithubRepo } from "../services";
import { moment } from "../utils";

export default function Experience() {
    const [repoList, setRepoList] = useState([]);
    useEffect((() => {
        fetchGithubRepo().then((data) => {
            setRepoList(data);
        })
    }), [])
    return (
        <div className="section" id="GithubProjects">
            <h1>GITHUB PROJECTS</h1>
            <div className="center flex-grow">
                <table>
                    {repoList.length ? (
                        <>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <td>Updated At</td>
                                <td><i className="fa-solid fa-closed-captioning"></i></td>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                repoList.map(({ name, updatedAt, url }, index) => (
                                    <tr key={index}>
                                        <td>{name}</td>
                                        <td>{moment(updatedAt).format("DD MMM YYYY HH:mm:ss")}</td>
                                        <td><i className="fa-brands fa-square-github" onClick={() => window.open(url, '_blank')}></i></td>
                                    </tr>
                                )
                                )
                            }
                            </tbody>
                        </>
                    ) :
                    <tbody>
                        <tr>
                            <th><i className="fa-solid fa-triangle-exclamation"></i></th>
                            <th>Error in fetching github repo</th>
                        </tr>
                        </tbody>}
                </table>
            </div>
        </div>
    );
}