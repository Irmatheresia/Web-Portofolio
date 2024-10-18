import React from 'react';
import { Container, Row, Col, Button, Card, Navbar, Nav } from 'react-bootstrap';
import '../styles/Portfolio.css';
import { Link } from 'react-router-dom';

const basename = "/Web-Portofolio";
const projects = [
    { 
        img: `${process.env.PUBLIC_URL}/assets/Medical.png`, 
        title: "Medical Center", 
        subtitle: "Mobile application developed with Dart. Application that can be used to check schedules and take a queue for consultation with a doctor.", 
        github: "https://github.com/Irmatheresia/Medical-Center.git" 
    },
    { 
        img: `${process.env.PUBLIC_URL}/assets/healsou.png`, 
        title: "HealSou", 
        subtitle: "An application designed with mobile-based Figma, a mental health application that has features for online consultations and also contains various meditations and calming music.", 
        github: "" 
    },
    { 
        img: `${process.env.PUBLIC_URL}/assets/Kopi.png`, 
        title: "Kopi Rasa", 
        subtitle: "An application designed with Figma which is website-based, a website that sells coffee products where there are features about various types of the best coffee products.", 
        github: "" 
    },
    { 
        img: `${process.env.PUBLIC_URL}/assets/resto.png`, 
        title: "Andromeda Resto", 
        subtitle: "An application designed with mobile-based Figma, an application for ordering food at a restaurant", 
        github: "" 
    }
];


const Portfolio = () => {
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

            <div id="portfolio" className="portfolio-container py-5">
                <Container>
                    <h2 className="text-center">My Portfolio</h2>
                    <Row className="justify-content-center">
                        {projects.map((project, index) => (
                            <Col xs={12} md={8} className="mb-4" key={index}>
                                <Card className="portfolio-card">
                                    <Row>
                                        <Col xs={4} className="image-col">
                                            <Card.Img variant="top" src={project.img} className="project-image" />
                                        </Col>
                                        <Col xs={8}>
                                            <Card.Body>
                                                <Card.Title>{project.title}</Card.Title>
                                                <Card.Text>{project.subtitle}</Card.Text>
                                                <Button href={project.github} target="_blank" variant="primary">View on GitHub</Button>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Portfolio;
