import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function Login({ getId }) {
    const idRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        //Get Id generated from App
        getId(idRef.current.value)
    };
    
    return (
        <Container className="align-items-center d-flex" style={{ height: '100vh'}} >
            <Form className="w-100" onSubmit={handleSubmit} >
                <Form.Group>
                    <Form.Label>Enter Your Id</Form.Label>
                    <Form.Control type="text"ref={idRef} required />
                </Form.Group>
                <Button type="submit" className="mr-2">Login</Button>
                <Button variant="secondary">Create a new Id</Button>
            </Form>
        </Container>
    );
};
