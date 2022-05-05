import { useNavigate } from "react-router-dom";

import NewEventForm from "../components/metrics/NewEventForm";

function NewEventPage() {
  const navigate = useNavigate();
  //https://metric-events-default-rtdb.firebaseio.com/events.json

  function AddEventHandler(eventData) {
    fetch("https://metric-events-default-rtdb.firebaseio.com/events.json", {
      method: "POST",
      body: JSON.stringify(eventData),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
	navigate("/", {replace: true});
    });
  }

  return (
    <section>
      <h1>Add New Event</h1>
      <NewEventForm onAddEvent={AddEventHandler} />
    </section>
  );
}

export default NewEventPage;
