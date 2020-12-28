import './Skills.css'
import React from "react";
import Slide from 'react-reveal/Slide';
import CssIcon from './css-icon.png'
import HtmlIcon from './html-icon.png'
import JavascriptIcon from './javascript-icon.png'
import HibernateIcon from './hibernate-icon.png'
import BootstrapIcon from './bootstrap-icon.png'
import SpringIcon from './spring-icon.png'
import ReactIcon from './react-icon.png'
import JqueryIcon from './jquery-icon.png'
import TypescriptIcon from './typescript-icon.png'
import JavaIcon from './java-icon.png'
import SassIcon from './sass-icon.png'

export default function Skills() {

    return (
        <>
            <div id="skills" className="skills-container row no-gutters justify-content-center">
                <h1>Skills</h1>
                <Slide right>
                    <div className="skills-wrapper">
                        <img className="skills-icon" src={CssIcon} alt=""/>
                        <img className="skills-icon" src={HtmlIcon} alt=""/>
                        <img className="skills-icon" src={JavascriptIcon} alt=""/>
                        <img className="skills-icon" src={SassIcon} alt=""/>
                        <img className="skills-icon" src={BootstrapIcon} alt=""/>
                        <img className="skills-icon" src={ReactIcon} alt=""/>
                        <img className="skills-icon" src={TypescriptIcon} alt=""/>
                        <img className="skills-icon" src={JqueryIcon} alt=""/>
                        <img className="skills-icon" src={JavaIcon} alt=""/>
                        <img className="skills-icon" src={SpringIcon} alt=""/>
                        <img className="skills-icon" src={HibernateIcon} alt=""/>
                    </div>
                </Slide>
            </div>
        </>
    )

}