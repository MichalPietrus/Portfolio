import React from "react";
import {Nav} from "react-bootstrap"
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css"



export default function SiteNavbar(props) {

    return (
        <>
            <Navbar sticky="top" collapseOnSelect className="navbar-container" expand="md" bg="dark" variant="dark">
                {props.windowWidth <= 768 && <Navbar.Brand expand="md" href="#">Menu</Navbar.Brand>}
                <Navbar.Toggle id="navbar-toggle" aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#wrapper">TOP</Nav.Link>
                        <Nav.Link href="#about-me">ABOUT ME</Nav.Link>
                        <Nav.Link href="#skills">SKILLS</Nav.Link>
                        <Nav.Link href="#projects">PROJECTS</Nav.Link>
                        <Nav.Link href="#contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )

}