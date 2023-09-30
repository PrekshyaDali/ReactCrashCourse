import classes from "./ContactList.module.css";

import React from "react";
import ContactCard from "./ContactCard";

function ContactList(props) {
  const renderContactList = props.contacts.map((item) => {
    return <ContactCard key={item.name} item={item}></ContactCard>;
  });
  return <div className={classes.item}>{renderContactList}</div>;
}

export default ContactList;
