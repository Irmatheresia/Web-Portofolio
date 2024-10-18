import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form telah dikirim");
        alert("Message Sent!");
        setEmail('');
        setMessage('');
    };

    return (
        <footer className="custom-bg">
            <Container>
                <Row>
                    <Col md={6}>
                        <h5 className='custom-name'>Contact</h5>
                        <ul className='titik'>
                            <li className='custom-clr'><i className="fa fa-envelope" aria-hidden="true"></i> : teresiacia2107@gmail.com</li>
                            <li className='custom-clr'><i className="fa fa-instagram" aria-hidden="true"></i> : @irmatheresiaa</li>
                            <li className='custom-clr'><i className="fa fa-github" aria-hidden="true"></i> : github.com/irmatheresia</li>
                        </ul>
                    </Col>
                    <Col md={6}>
                        <h5 className='custom-name'>Contact Me</h5>
                        <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail" className='custom-clr'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required
                                />
                                <Form.Text className="text-warning">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formMessage" className='custom-clr'>
                                <Form.Label>Message</Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    rows={3} 
                                    placeholder="Enter your message" 
                                    value={message} 
                                    onChange={(e) => setMessage(e.target.value)} 
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Send
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
