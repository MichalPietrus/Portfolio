import React, {useEffect, useState} from "react";
import SiteNavbar from "./navbar/SiteNavbar";
import Banner from "./banner/Banner";
import AboutMe from "./aboutme/AboutMe";
import Skills from "./skills/Skills";
import PrintProjects from "./project/Projects";
import Contact from "./contact/Contact";




export default function App() {

  const [windowWidth,setWindowWidth] = useState(window.innerWidth);
  const [windowHeight,setWindowHeight] = useState(window.innerHeight - 58);

  function handleResize() {
    setWindowWidth(() => window.innerWidth)
    setWindowHeight(() => window.innerHeight - 58)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  return (
      <div id="wrapper">
        <SiteNavbar windowHeight={windowHeight} windowWidth={windowWidth} />
        <Banner windowHeight={windowHeight} windowWidth={windowWidth} backgroundColor="gray"/>
        <AboutMe/>
        <Skills/>
        <PrintProjects windowWidth={windowWidth}/>
        <Contact/>
      </div>
  )

}