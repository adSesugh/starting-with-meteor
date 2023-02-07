import React from 'react'
import { ContactsCollection } from '../api/ContactsCollection'
import { useTracker } from 'meteor/react-meteor-data'

const ContactList = () => {
    const contacts = useTracker(() => {
        return ContactsCollection.find({}).fetch();
    });
    return (
        <div>
            <h3>Contact List</h3>
            <hr />
            {contacts.map((contact, index) => (
                <li key={index}>{contact.name} - {contact.email}</li>
            ))}
        </div>
    )
}

export default ContactList