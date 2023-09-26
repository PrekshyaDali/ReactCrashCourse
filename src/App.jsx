import React from "react";
import AddContact from "./components/AddContact";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
const App = () => {
  return (
   <>
   <Header></Header>
   <AddContact></AddContact>
   <ContactList></ContactList>
   </>
  );
};

export default App;
