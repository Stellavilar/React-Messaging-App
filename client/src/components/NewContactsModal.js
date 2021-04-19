import React, { useRef } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useContacts } from '../contexts/ContactsProvider';

//this modal is to create a new contact
export default function NewContactsModal({ closeModal }) {
    const idRef = useRef();
    const nameRef = useRef();
    const { createContact } = useContacts()

    function handleSubmit(e) {
        e.preventDefault();
        //Contacts will be saved into an object
        createContact(idRef.current.value, nameRef.current.value);
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
