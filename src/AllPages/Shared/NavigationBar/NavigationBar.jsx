import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const NavigationBar = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <Navbar className='mt-4 mb-5 rounded-3' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto align-items-center gap-4 fs-6 fw-bold">
                            <Link className='text-decoration-none text-black' to='/category/0'>Home</Link>
                            <Nav.Link className='text-black' href="#features">About</Nav.Link>
                            <Nav.Link className='text-black' href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav className='align-items-center'>
                            {
                                user && <Nav.Link href="#deets"><FaUserCircle style={{ fontSize: '2rem' }} /></Nav.Link>
                            }

                            {
                                user ?
                                    <Button variant='secondary'>Log Out</Button>
                                    :
                                    <Link to='/login'>
                                        <Button variant='secondary'>Login</Button>
                                    </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;