import React, { useContext, useState } from "react";
import { Container, Form, Button } from 'react-bootstrap';
import AuthContext from "../../context/authContext";

export function Register() {
    const { register } = useContext(AuthContext);
    const [message, setMessage] = useState(' ');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        if (!email.includes("@") || !email.includes(".")) {
            setMessage("Email must contain @ and .");
            return;
        }

        if (password !== confirmPassword) {
            setMessage("Passwords must be the same");
            return;
        }

        register(email, password);
        setMessage("Successfully registered");
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <Container className="mt-5">
            <h6 className="text-primary">{message}</h6>
            <h2>Register</h2>
            <Form onSubmit={handleRegister}>
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

                <Form.Group className="mt-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button className="mt-3" variant="primary" type="submit">Register</Button>
            </Form>
        </Container>
    );
}