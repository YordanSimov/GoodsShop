import React, { useContext } from "react";
import { Container, Form, Button } from 'react-bootstrap';
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";

export function Login() {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = (e) => {
        e.preventDefault();

        login(email, password);
        setEmail('');
        setPassword('');
    }

    return (
        <>
            <Container className="mt-5">
                <h2>Login</h2>
                <Form onSubmit={loginHandler}>
                    <Form.Group className="mt-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mt-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button className="mt-3" variant="primary" type="submit">Login</Button>
                </Form>
                <div className="mt-3">
                    Don't have an account ? <Link path={"/register"}>Register here</Link>
                </div>
            </Container>
        </>
    )
}