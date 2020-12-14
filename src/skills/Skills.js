import './Skills.css'
import React from "react";
import CssIcon from './css-icon.png'
import HtmlIcon from './html-icon.png'
import JavascriptIcon from './javascript-icon.png'
import SkillsHeader from './skills-header.png'
import FrontEndHeader from './front-end-header.png'
import HibernateIcon from './hibernate-icon.png'
import BootstrapIcon from './bootstrap-icon.png'
import SpringIcon from './spring-icon.png'
import ReactReduxIcon from './react-redux.png'
import JqueryIcon from './jquery-icon.png'
import BackendIcon from './back-end-header.png'
import TypescriptIcon from './typescript-icon.png'
import JavaIcon from './java-icon.png'

export default function Skills() {

    return (
        <div id="skills" className="skills-container">
            <div className="row no-gutters justify-content-center">
                <img className="skills-header" src={SkillsHeader} alt=""/>
            </div>
            <div className="row no-gutters justify-content-center">
                <img className="backend-header" src={BackendIcon} alt=""/>
            </div>
            <div className="row backend no-gutters justify-content-around">
                <img src={JavaIcon} alt=""/>
                <img src={SpringIcon} alt=""/>
                <img src={HibernateIcon} alt=""/>
            </div>
            <div className="row no-gutters justify-content-center">
                <img className="frontend-header" src={FrontEndHeader} alt=""/>
            </div>
            <div className="row frontend no-gutters justify-content-around">
                <img src={HtmlIcon} alt=""/>
                <img src={CssIcon} alt=""/>
                <img src={BootstrapIcon} alt=""/>
            </div>
            <div className="row frontend no-gutters justify-content-around">
                <img src={JavascriptIcon} alt=""/>
                <img src={JqueryIcon} alt=""/>
                <img src={ReactReduxIcon} alt=""/>
                <img src={TypescriptIcon} alt=""/>
            </div>
        </div>
    )

}