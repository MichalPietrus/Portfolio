import React from "react";
import '../banner/Banner.css';


export default function Banner(props) {

    const bannerStyle = {
        width: props.windowWidth,
        height: props.windowHeight,
        maxWidth: '100%'
    }
    return (
        <div id="banner" style={bannerStyle}>
            <ul className="slides">
                <li><span>laptop1</span></li>
                <li><span>laptop2</span></li>
                <li><span>laptop3</span></li>
                <li><span>laptop4</span></li>
            </ul>
            <div className="bannerTextContainer">
                <h1>Michał Pietrus</h1>
                <h2>Full-Stack Developer</h2>
            </div>
        </div>
    );

}