import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (

        <Container className='mt-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary mt-2 fs-5 fw-semibold'><small>Journalism Without Fear or Favor</small></p>
                <p className='fw-semibold fs-5 '>{moment().format('dddd, ')}<span className='text-secondary'>{moment().format("MMMM D, YYYY")}</span></p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger fs-6 ' pauseOnHover={true} speed={60}>
                    I can be a React component, multiple React components, or just some text...... I can be a React component, multiple React components, or just some text....
                </Marquee>
            </div>

            <Navbar className='mt-4 mb-5 rounded-3' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto gap-4 fs-6 fw-bold">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#features">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant='secondary'>Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>


    );
};

export default Header;