import Card from "../ui/Card";
import Card2 from "../ui/Card2";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {

if (props.type === undefined){
  return (
    <li className={classes.item}>
      <Card2>
        <div className={classes.content}>         
          <p>{props.time}</p>

        </div>
      </Card2>
      <hr style={{width: "200px"}}></hr>
    </li>
  );
}
else{
  return (
    <li className={classes.item}>
      <Card>
        {/* <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div> */}
        <div className={classes.content}>
          <h3>{props.type}</h3>
          <p>{props.first}</p>
          <hr/>
          <p>{props.second}</p>
          <hr/>
          <p>{props.third}</p>          
          <p>{props.time}</p>
          {/* <address>{props.address}</address>
          <p>{props.description}</p> */}
        </div>
      </Card>
    </li>
  );
        }
}

export default MeetupItem;
