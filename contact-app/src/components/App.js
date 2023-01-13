import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { uuid } from 'uuidv4';
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import ContactDetail from './ContactDetail'
import DeleteContact from './DeleteContact'

function App() {

  const LOCAL_STORAGE_KEY = "contacts"

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  });

  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, { id: uuid(), ...contact }])
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactList)
  }

  // useEffect(() => {
  //   const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  //   if (retrieveContacts) setContacts(retrieveContacts)
  // }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ContactList contacts={contacts} getContactId={removeContactHandler} />}></Route>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />}></Route>
          <Route path="/contact/:id" element={<ContactDetail />}></Route>
          <Route path="/delete/:id" element={<DeleteContact deleteContactId={removeContactHandler} />}></Route>
        </Routes>
        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}

      </Router>
    </div>
  );
};

export default App;