import './Project.css'
import React from "react";
import PDF from "../contact/MICHAŁ_PIETRUS_CV.pdf";

export default function Project(props) {

    let photo = (
        <div className="col-10 col-xl-7">
            <img className="project-mockup" src={props.photo} alt=""/>
        </div>
    )


    let projectDescription = (
        <div className="text-column col-10 col-xl-4">
            <h1 className="project-header">{props.projectTitle}</h1>
            <p className="project-description">{props.description}</p>
            <ul className="technologies-list">
                {props.technologies.map(technology => <li key={technology}>{technology}</li>)}
            </ul>
            <div className="row no-gutters justify-content-between">
                <a rel="noopener noreferrer" target="_blank" href={props.githubLink}>
                    <i className="fab fa-github"/>
                </a>
                <a rel="noopener noreferrer" target="_blank" href={props.siteLink} className="btn-project">See Project</a>
            </div>
        </div>
    )

    if (props.projectTitle === "Expense Manager" && props.windowWidth >= 1200) {
        return (
            <div className="project-container row justify-content-around no-gutters">
                {photo}
                {projectDescription}
            </div>
        )
    } else {
        return (
            <div className="project-container row justify-content-around no-gutters">
                {projectDescription}
                {photo}
            </div>
        )
    }

}