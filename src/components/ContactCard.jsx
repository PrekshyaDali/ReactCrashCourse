import React from "react";
import classes from "./ContactList.module.css";

function ContactCard(props) {
  const {id, name, email } = props.item;
  return (
    <>
      <div className={classes.listdiv}>
        <img className={classes.profileimg} src="profile.png" />
        <div className={classes.nameandemaildiv}>
          <div className={classes.name}>{name}</div>
          <div className={classes.email}>{email}</div>
        </div>

        <div className={classes.deletediv}>
          <img onClick={()=>{props.clickHandler(id)}} className={classes.deleteicon} src="DeleteIcon.png" />
        </div>
      </div>
    </>
  );
}

export default ContactCard;
