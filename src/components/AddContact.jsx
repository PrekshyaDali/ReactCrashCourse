import React from "react";
import classes from "./AddContact.module.css";

const AddContact = () => {
  return (
    <div className={classes.Contact_div}>
      <h1>Add Contact</h1>
      <div className={classes.Namediv}>
        <label htmlFor="Name">Name</label>
        <input type="text" placeholder="Name" />
      </div>
      <div className={classes.Emaildiv}>
        <label htmlFor="Email">Email</label>
        <input type="text" placeholder="Email" />
      </div>
      <button className = {classes.Add}>Add</button>
    </div>
  );
};

export default AddContact;
