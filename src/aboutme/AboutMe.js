import React from "react";
import './AboutMe.css'
import photo from "./cv-photo.jpg"

export default function AboutMe() {


    return (
        <section id="about-me" className="about-me-container">
            <div className='row no-gutters justify-content-center about-me-header'><h1>About me</h1></div>
            <div className="row justify-content-around no-gutters">
                <div className="text-column col-10 col-md-5">
                    <p>I am a Full-Stack developer.
                        Programming is my passion, I love to learn it and solve any problems I encounter,
                        I'm a hardworking and disciplined person who likes to work both
                        alone and in a group. I'm building relationships very quickly
                        and i easily communicate with others. Even though I haven't finished any university, I'm sure I
                        can surprise you with my skills
                    </p>
                </div>
                <div className="col-10 col-md-4">
                    <img className="cv-photo" src={photo} alt=""/>
                </div>
            </div>
        </section>
    )

}