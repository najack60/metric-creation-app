import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewEventForm.module.css";

function NewEventForm(props) {
  const eventIdInputRef = useRef();
  const eventNameInputRef = useRef();
  const userIdInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enterdEventId = eventIdInputRef.current.value;
    const enterdEventName = eventNameInputRef.current.value;
    const enterdUserId = userIdInputRef.current.value;

    const eventData = {
      eventId: enterdEventId,
      eventName: enterdEventName,
      userId: enterdUserId,
    };

    props.onAddEvent(eventData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="EID">Event ID</label>
          <input type="text" required id="EID" ref={eventIdInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Event Name</label>
          <input type="text" required id="name" ref={eventNameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="UID">User ID</label>
          <input type="text" required id="UID" ref={userIdInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Event</button>
        </div>
      </form>
    </Card>
  );
}

export default NewEventForm;
