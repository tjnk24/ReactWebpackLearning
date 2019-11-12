import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from "../constants/AppConstants";
import EventEmitter from 'events';

const CHANGE_EVENT = 'change';

let _contacts = [];

function setContacts(contacts){
    _contacts = contacts.sort(sortByName);
}

function setContact(contact) {

    if (_contacts.length !== 0) {
        let tempContacts = _contacts.sort(sortById);
        contact.id = tempContacts[tempContacts.length - 1].id + 1;
    }
    else {
        contact.id = 1;
    }
    _contacts.push(contact);
    setContacts(_contacts);
}

function deleteContact(id) {
    console.log(_contacts);
    let index = _contacts.findIndex(x => x.id === id);
    _contacts.splice(index, 1);
}

function sortByName(a, b) {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();

    return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0))
}

function sortById(a, b) {
    const aId = a.id;
    const bId = b.id;

    return aId - bId;
}

class AppStoreClass extends EventEmitter {

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    getContacts() {
        return _contacts;
    }
}

const AppStore = new AppStoreClass();

AppStore.dispatchToken = AppDispatcher.register(action => {
    switch(action.actionType) {
        case AppConstants.RECEIVE_CONTACTS:
            setContacts(action.contacts);
            AppStore.emitChange();
            break;
        case AppConstants.RECEIVE_CONTACTS_ERROR:
            alert(action.message);
            AppStore.emitChange();
            break;
        case AppConstants.RECEIVE_CONTACT:
            setContact(action.contact);
            AppStore.emitChange();
            break;
        case AppConstants.DELETE_CONTACT:
            deleteContact(action.id);
            AppStore.emitChange();
            break;
        case AppConstants.DELETE_CONTACT_ERROR:
            alert(action.message);
            AppStore.emitChange();
            break;
        default:
            break;
    }
});

export default AppStore;