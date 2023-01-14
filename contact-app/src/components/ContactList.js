import React from 'react'
import { Link } from 'react-router-dom'
import ContactCard from './ContactCard';
import { useRef } from 'react';

const ContactList = (props) => {

    const inputEl = useRef("")
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

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value)
    }
    return (
        <div className='ui celled list' style={{ marginTop: "3.5rem" }}>
            <h2>
                Contact List
                <Link to={"/add"}>
                    < button className='ui button blue' style={{ float: "right" }}>Add Contact</button>
                </Link>
            </h2>
            <div className='ui search' style={{ marginBottom: '1.5rem' }}>
                <div className='ui icon input' style={{ width: '100%' }}>
                    <input ref={inputEl} type="text" placeholder='Search Contacts' className='prompt' value={props.term} onChange={getSearchTerm} />
                    <i className='search icon' />
                </div>
            </div>
            {renderContactList}
        </div >
    );
}

export default ContactList