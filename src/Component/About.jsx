import React from 'react';
import { Container, Row, Col, Card, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
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

            {/* About Section */}
            <div id="about" className="about-container py-5 mt-5">
                <Container>
                    <h2 className="text-center">About Me</h2>
                    <Container fluid className="bg-warning">
                        <Row className="d-flex align-items-start">
                            <Col xs={12} md={6} className="about-name">
                                <h3>Hi, I'm Irma Theresia</h3>
                                <p>
                                    I'm passionate about creating intuitive designs and developing solutions that enhance user experiences across web and mobile platforms.
                                    Let's collaborate and turn great ideas into reality through seamless development!
                                </p>
                            </Col>
                            <Col xs={12} md={6} className="img-profile">
                                <img
                                    src={process.env.PUBLIC_URL + '/assets/profile.jpg'}
                                    alt="Your Photo"
                                    className="img-fluid"
                                    style={{ maxWidth: '250px' }}
                                />
                            </Col>
                        </Row>
                    </Container>

                    <h3 className="text-center mt-5">Skills</h3>
                    <Row className="justify-content-center">
                        <Col xs={6} md={3} className="mb-4">
                            <Card className="skill-card">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/html.png'} />
                                <Card.Body>
                                    <Card.Title>HTML</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={3} className="mb-4">
                            <Card className="skill-card">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/css.png'} />
                                <Card.Body>
                                    <Card.Title>CSS</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={3} className="mb-4">
                            <Card className="skill-card">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/dart.png'} />
                                <Card.Body>
                                    <Card.Title>Dart</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={3} className="mb-4">
                            <Card className="skill-card">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/javascript.png'} />
                                <Card.Body>
                                    <Card.Title>JavaScript</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <h3 className="text-center mt-5">Software Design Skills</h3>
                    <Row className="justify-content-center">
                        <Col xs={6} md={3} className="mb-4">
                            <Card className="skill-card">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/figma.jpeg'} />
                                <Card.Body>
                                    <Card.Title>Figma</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={3} className="mb-4">
                            <Card className="skill-card">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/adbp.png'} />
                                <Card.Body>
                                    <Card.Title>Adobe PhotoShop</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={3} className="mb-4">
                            <Card className="skill-card">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/adbi.png'} />
                                <Card.Body>
                                    <Card.Title>Adobe Illustration</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default About;
