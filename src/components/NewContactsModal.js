import React, { useRef } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

export default function NewContactsModal({ closeModal }) {
    const idRef = useRef();
    const nameRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        // createContact(idRef.current.value, nameref.current.value)
        closeModal();
    }

    return (
        <>
            <Modal.Header closeButton>Ajouter un contact</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit} >
                    <Form.Group>
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" ref={idRef} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="text" ref={nameRef} required />
                    </Form.Group>
                    <Button type="submit">Sauvegarder</Button>
                </Form>
            </Modal.Body>
        </>
    );
};
