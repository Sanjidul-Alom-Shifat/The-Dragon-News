import React from 'react';
import Footer from '../AllPages/Shared/Footer/Footer';
import Header from '../AllPages/Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import RightNavbar from '../AllPages/Shared/RightNavbar/RightNavbar';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>

            <Container className='mt-5'>
                <Row>
                    <Col lg={9}>
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

export default NewsLayout;