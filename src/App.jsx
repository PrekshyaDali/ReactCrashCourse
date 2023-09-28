import React, {useState} from "react";
import AddContact from "./components/AddContact";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
const App = () => {
const [contacts, setContacts] = useState([])


  return (
    <>
      <Header></Header>
      <AddContact></AddContact>
      <ContactList contact={contacts}></ContactList>
    </>
  );
};

export default App;
