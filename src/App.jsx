import React, { useState, useEffect } from "react";
import AddContact from "./components/AddContact";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
// import {uuid} from 'uuidv4';
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts";


  const addContactHandler = (contact) => {
    console.log(contacts);
    const newContacts = [...contacts, { id: uuidv4(), ...contact }];
    setContacts(newContacts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContacts));
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContactList));
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, []);

  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/add" element={<AddContact />} />
        </Routes>
        {/* <AddContact addContactHandler={addContactHandler}></AddContact>
        <ContactList
          contacts={contacts}
          getContactId={removeContactHandler}
        ></ContactList> */}
      </Router>
    </>
  );
};

export default App;
