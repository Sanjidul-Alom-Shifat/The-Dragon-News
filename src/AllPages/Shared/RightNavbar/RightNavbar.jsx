import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram  } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNavbar = () => {
    return (
        <div>
            <h5>Login with : </h5>
            <Button className='w-100 mt-2 mb-2 border border-black ' variant="light"> <FaGoogle/> Login with Google</Button>
            <Button className='w-100 border border-black' variant="light"> <FaGithub /> Login with Github</Button>
            
            <div>
                <h5 className='mt-4 mb-2'>Find Us On</h5>
                <ListGroup className=''>
                    <ListGroup.Item > <FaFacebook></FaFacebook> facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter></FaTwitter> twitter </ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNavbar;