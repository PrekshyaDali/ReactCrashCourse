import classes from "./ContactList.module.css";

import React from "react";
import ContactCard from "./ContactCard";

function ContactList(props) {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const contacts = [
    {
      id: 1,
      name: "Rahul",
      email: "hello",
    },
  ];

  const renderContactList = contacts.map((item) => (
    <ContactCard
      item={item}
      clickHandler={deleteContactHandler}
      key={item.id}
    ></ContactCard>
  ));

  return (
    <>
      <div className={classes.addcontactdiv}>
        <button className={classes.AddButton}>Add Contact</button>
      </div>

      <div className={classes.item}>{renderContactList}</div>
    </>
  );
}

export default ContactList;
