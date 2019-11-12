import React from 'react';
import {ListGroup} from "react-bootstrap";
import AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";
import ContactListItem from "./ContactListItem";

function getContactListItem(contact) {
    return (
        <ContactListItem key={contact.id} contact={contact} />
    );
}
class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           contacts: []
        };

        this.onChange = this.onChange.bind(this);

        AppStore.addChangeListener(this.onChange);
    }
    /*const [contacts, setContacts] = useState([]);*/



/*    componentWillMount() {

    }*/

    componentDidMount() {
        AppActions.receiveContacts();
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this.onChange);
    }

    onChange(){
        this.setState({
            contacts: AppStore.getContacts()
        });
    }

    render() {
        let contactListItems;
        if(this.state.contacts){
            contactListItems = this.state.contacts.map(contact => getContactListItem(contact));
        }
        return (
            <ListGroup>
                {contactListItems}
            </ListGroup>
        )
    }

}

export default Contacts;