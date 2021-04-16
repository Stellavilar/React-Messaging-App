import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useContacts } from '../contexts/ContactsProvider';
import { useConversations } from '../contexts/ConversationsProvider';

export default function NewConversationModal({ closeModal }) {
const [selectedContactIds, setSelectedContactIds ] = useState([]);
const { contacts } = useContacts();
const { createConversations } = useConversations();

function handleCheckboxChange(contactID) {
    setSelectedContactIds(prevSelectedContactIds => {
        if(prevSelectedContactIds.includes(contactID)) {
            return prevSelectedContactIds.filter(prevId => {
                return contactID !== prevId
            })
        } else {
            return [...prevSelectedContactIds, contactID]
        }
    })
};

function handleSubmit(e) {
    e.preventDefault();
    createConversations(selectedContactIds)
    closeModal();
}

    return (
        <>
            <Modal.Header closeButton>Créer une conversation</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit} >
                    { contacts.map(contact => (
                        <Form.Group controlId={contact.id} key={contact.id} >
                            <Form.Check
                                type="checkbox"
                                value={selectedContactIds.includes(contact.id)}
                                label={contact.name}
                                onChange={() => handleCheckboxChange(contact.id)}
                            />
                        </Form.Group>
                    ))}
                    <Button type="submit">Créer</Button>
                </Form>
            </Modal.Body>
        </>
    );
};
