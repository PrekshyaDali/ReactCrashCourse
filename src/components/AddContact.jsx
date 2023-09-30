import React, { useState } from "react";
import classes from "./AddContact.module.css";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    props.addContactHandler({ name, email });
    setName("");
    setEmail("");
    // console.log(name, email);
  };

  const namechangeHandler = (event) => {
    setName(event.target.value);
  };
  const emailchangeHandler = (event) => {
    setEmail(event.target.value);
  };

  return (
    <form onSubmit={submitHandler} >
      <div className={classes.Contact_div}>
        <h1>Add Contact</h1>
        <div className={classes.Namediv}>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={namechangeHandler}
          />
        </div>
        <div className={classes.Emaildiv}>
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={emailchangeHandler}
          />
        </div>
        <button  type="submit" className={classes.Add}>
          Add
        </button>
      </div>
    </form>
  );
};

export default AddContact;
