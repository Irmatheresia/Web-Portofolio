import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = (props) => {
    console.log("Props di komponen Home:", props);
    

    return (
        <>
            <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand className="nav-name">
                    <span className="navbar-brand-text">Irma Theresia</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="home-container d-flex justify-content-center align-items-center text-center text-white">
                <div>
                    <h1 className="display-2"><b>Welcome to My Portfolio</b></h1>
                    <p className="lead fade-in-up">Discover my journey in UI/UX Design, Web & Mobile Development</p>
                    <Button as={Link} to="/about" className="mt-3" variant="primary">Learn More About Me</Button>
                </div>
            </div>
        </>
    );
};

export default Home;
