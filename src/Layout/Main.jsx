import React from 'react';
import Footer from '../AllPages/Shared/Footer/Footer';
import Header from '../AllPages/Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNavbar from '../AllPages/Shared/LeftNavbar/LeftNavbar';
import RightNavbar from '../AllPages/Shared/RightNavbar/RightNavbar';

const Main = () => {
    return (
        <div>

            <Header></Header>

            <Container className='mt-2'>
                <Row>
                    <Col lg={3}>
                        <LeftNavbar></LeftNavbar>
                    </Col>
                    <Col lg={6}>
                        <h5 className='text-center'>Main body</h5>
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