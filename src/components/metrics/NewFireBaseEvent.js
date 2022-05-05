import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
//import firebase from "firebase/compat/app";

import Card from "../ui/Card";
import classes from "./NewEventForm.module.css";

function NewFireBaseEvent() {
  const [newID, setNewID] = useState(0);
  const [newDuration, setNewDuration] = useState(0);
  const [newName, setNewName] = useState("");
  const eventsCollectionRef = collection(db, "events");


  function clickHandler(){
    addDoc(eventsCollectionRef, {
      ID: Number(newID),
      duration: Number(newDuration),
      name: newName,
    });
  }
  
  // const createUser = async () => {
  //   await addDoc(eventsCollectionRef, {
  //     ID: Number(newID),
  //     duration: Number(newDuration),
  //     name: newName,
  //     thing: "hello",
  //   });
  // };

  return (
    <Card>
      <form className={classes.form} onSubmit={clickHandler}>
        <div className={classes.control}>
          <label>User ID</label>
          <input
            type="number"
            onChange={(event) => {
              setNewID(event.target.value);
            }}
          />
        </div>
        <div className={classes.control}>
          <label>User Duration</label>
          <input
            type="number"
            onChange={(event) => {
              setNewDuration(event.target.value);
            }}
          />
        </div>
        <div className={classes.control}>
          <label>Event Name</label>
          <input
            type="text"
            onChange={(event) => {
              setNewName(event.target.value);
            }}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Event</button>
        </div>
      </form>
    </Card>
  );
}

export default NewFireBaseEvent;
