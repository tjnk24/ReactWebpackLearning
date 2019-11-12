import React from 'react';
import {Button, Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import AppActions from "../actions/AppActions";

const ContactListItem = (props) => {
    const contact = props.contact;

    const handleDeleteClick = (id) => {
        AppActions.deleteContact(id);
    };

    return (
        <div>
            <Card bg="light">
                <Card.Body>
                    <Card.Title>{contact.name}</Card.Title>
                    <ListGroup>
                        <ListGroupItem>Email: {contact.email}</ListGroupItem>
                        <ListGroupItem>Phone: {contact.phone}</ListGroupItem>
                    </ListGroup>
                    <br/>
                    <Button variant="danger" onClick={handleDeleteClick.bind(this, contact.id)}>Delete</Button>
                </Card.Body>
            </Card>
            <br/>
        </div>
    );
};

export default ContactListItem;
