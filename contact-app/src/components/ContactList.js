import React from 'react'
import { Link } from 'react-router-dom'
import ContactCard from './ContactCard';

const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactId(id)
    };

    // const contacts = [{
    //     id: 1,
    //     "name": "Alagappan",
    //     "email": "alagappan@gmail.com"
    // }]

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
        )
    })

    return (
        <div className='ui celled list' style={{ marginTop: "3.5rem" }}>
            <h2>
                Contact List
                <Link to={"/add"}>
                    < button className='ui button blue' style={{ float: "right" }}>Add Contact</button>
                </Link>
            </h2>
            {renderContactList}
        </div >
    );
}

export default ContactList