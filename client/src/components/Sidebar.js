import React, { useState } from 'react';
import { Tab, Nav, Button, Modal } from 'react-bootstrap';
import Conversations from './Conversations';
import Contacts from './Contacts';
import NewConversationModal from './NewConversationModal';
import NewContactsModal from './NewContactsModal';

const CONVERSATION_KEY = "conversations";
const CONTACTS_KEY = "contacts";

export default function Sidebar({ id }) {
    //Management of tab panes:
    const [ activeKey, setActiveKey ] = useState(CONVERSATION_KEY);
    const conversationsOpen = activeKey === CONVERSATION_KEY;
    //Management of conversation modal:
    const [ modalOpen, setModalOpen ] = useState(false);

    //Function to close the modal:
    function closeModal() {
        setModalOpen(false)
    }

    return (
        <div style={{width: '250px'}} className="d-flex flex-column">
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey} >
                <Nav variant="tabs" className="justify-content-center" >
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATION_KEY}>Conversations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className="border-right overflow-auto flex-grow-1">
                    <Tab.Pane eventKey={CONVERSATION_KEY}>
                        <Conversations />
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS_KEY}>
                        <Contacts />
                    </Tab.Pane>
                </Tab.Content>
                <div className="p-2 border-top border-right small">
                    Votre Id: <span className="text-muted">{id}</span>
                </div>
                <Button className="rounded-0" onClick={() => setModalOpen(true)} style={{backgroundColor: '#2f8b8e'}}>
                    Ajouter { conversationsOpen ? 'une discussion' : 'un contact'}
                </Button>
            </Tab.Container>
            <Modal show={modalOpen} onHide={closeModal} >
                { conversationsOpen ?
                <NewConversationModal closeModal={closeModal} /> :
                <NewContactsModal closeModal={closeModal} />   
                }
            </Modal>
        </div>
    );
};
