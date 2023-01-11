// import React from "react";
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

function App() {

  const contact = [
    {
      id: 1,
      name: "Alan",
      email: "alan@gmail.com"
    },
    {
      id: 2,
      name: "Mike",
      email: "mike@gmail.com"
    },
    {
      id: 1,
      name: "Joey",
      email: "joey@gmail.com"
    }
  ];
  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList contacts={contact} />
    </div>
  );
};

export default App;