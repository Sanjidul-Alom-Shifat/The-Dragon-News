import React from 'react';
import Footer from '../AllPages/Shared/Footer/Footer';
import Header from '../AllPages/Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNavbar from '../AllPages/Shared/LeftNavbar/LeftNavbar';
import RightNavbar from '../AllPages/Shared/RightNavbar/RightNavbar';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../AllPages/Shared/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>

            <Header></Header>
            <NavigationBar></NavigationBar>

            <Container className='mt-2'>
                <Row>
                    <Col lg={3}>
                        <LeftNavbar></LeftNavbar>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNavbar></RightNavbar>
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>

        </div>
    );
};

export default Main;