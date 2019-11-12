import React, {useEffect, useState} from 'react';
import {Card, FormGroup, Button} from 'react-bootstrap';
import AppActions from "../actions/AppActions";

const AddContact = (props) => {
    const [newContact, setNewContact] = useState({
       name:'',
       email: '',
       phone: ''
    });

    const nameRef = React.createRef();
    const emailRef = React.createRef();
    const phoneRef = React.createRef();

    useEffect(() => {
        if(newContact.name !== '') {

            AppActions.saveContact(newContact);
        }
    },[newContact]);

    const handleSubmit = (e) => {
        if (nameRef.current.value === ''){
            alert('please enter an information into fields, bruh...');
        } else {
            setNewContact({
                name: nameRef.current.value,
                email: emailRef.current.value,
                phone: phoneRef.current.value,
            })
        }

        nameRef.current.value = '';
        emailRef.current.value = '';
        phoneRef.current.value = '';

        e.preventDefault();
    };

    return (
        <div>
            <Card>
                <Card.Header>Add Contact</Card.Header>
                <Card.Body>
                    <form onSubmit={handleSubmit.bind(this)}>
                        <FormGroup>
                            <input
                                className="form-control"
                                type="text"
                                ref={nameRef}
                                placeholder="Add some name bruh..."
                            />
                        </FormGroup>
                        <FormGroup>
                            <input
                                className="form-control"
                                type="text"
                                ref={emailRef}
                                placeholder="Add some email bruh..."
                            />
                        </FormGroup>
                        <FormGroup>
                            <input
                                className="form-control"
                                type="text"
                                ref={phoneRef}
                                placeholder="Add some phone bruh..."
                            />
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                    </form>
                </Card.Body>
            </Card>
            <br/>
        </div>
    );
};

export default AddContact;
