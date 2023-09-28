import React from "react";
import classes from "./ContactList.module.css";

function ContactCard(props) {
  const { id, name, email } = props.item;
  return (
    <>
    <li key={id}>
      <div className={classes.listdiv}>
        <img className={classes.profileimg} src="profile.png" />
        <div className={classes.nameandemaildiv}>
          <div className={classes.name}>{name}</div>
          <div className={classes.email}>{email}</div>
        </div>

        <div className={classes.deletediv}>
          <img className={classes.deleteicon} src="DeleteIcon.png" />
        </div>
      </div>
    </li>
    </>
  );
}

export default ContactCard;
