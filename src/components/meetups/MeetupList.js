import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

let i = 0;
function MeetupList(props) {
  i++;
  return (
    <ul className={classes.list2}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={i++}
          // id={meetup.id}
          // image={meetup.image}
          type={meetup.type}
          first={meetup.first}
          second={meetup.second}
          third={meetup.third}
          time={meetup.time}
    //       address={meetup.address}
	  // description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
