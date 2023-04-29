import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {

    const { LoginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/category/0';

    const HandleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        // const name = form.name.value;
        // const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // logged user
        LoginUser(email, password)
            .then((result) => {
                const LoggedUser = result.user;
                // console.log(LoggedUser);
                toast.success('Login Successfully');
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error.message);
                toast.error(error.message);
            })
    }

    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Login</h3>
            <Form onSubmit={HandleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;