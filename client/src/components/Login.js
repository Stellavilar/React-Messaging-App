import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';

export default function Login({ getId }) {
    const idRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        //Get Id generated from App
        getId(idRef.current.value)
    };

    function createNewId() {
        //Generate new Id with uuid
        getId(uuidV4());
    };

    return (
        <Container className="align-items-center d-flex" style={{ height: '100vh'}} >
            <Form className="w-100" onSubmit={handleSubmit} >
                <Form.Group>
                    <Form.Label>Identifiant:</Form.Label>
                    <Form.Control type="text"ref={idRef} required />
                </Form.Group>
                <Button type="submit" className="mr-2">Se connecter</Button>
                <Button variant="secondary" onClick={createNewId} >Créer un nouvel Id</Button>
            </Form>
        </Container>
    );
};
