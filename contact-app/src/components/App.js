import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { uuid } from 'uuidv4';
import './App.css';
import api from '../api/contacts'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import ContactDetail from './ContactDetail'
import DeleteContact from './DeleteContact'

function App() {

  // const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm)
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
      })
      setSearchResults(newContactList)
    } else {
      setSearchResults(contacts)
    }
  }

  const retrieveContacts = async () => {
    const response = await api.get("/contacts")
    return response.data
  }

  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  // });

  const addContactHandler = async (contact) => {
    console.log(contact)
    const request = {
      id: uuid(),
      ...contact
    }
    const response = await api.post("/contacts", request)
    setContacts([...contacts, response.data])
  }

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactList)
  }

  useEffect(() => {
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // if (retrieveContacts) setContacts(retrieveContacts)
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts()
      if (allContacts) setContacts(allContacts)
    }
    getAllContacts()
  }, [])

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  // }, [contacts]);

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ContactList contacts={searchTerm.length < 1 ? contacts : searchResults} getContactId={removeContactHandler} term={searchTerm} searchKeyword={searchHandler} />}></Route>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />}></Route>
          {/* <Route path="/edit" element={<EditContact updateContactHandler={updateContactHandler} />}></Route> */}
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