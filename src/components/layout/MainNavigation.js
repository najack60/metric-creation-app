import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Metric App</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Add Metric</Link>
          </li>
          <li>
            <Link to="/new-event">Add Event</Link>
          </li>
          <li>
            <Link to="/new-firestore-event">Add Firestore Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
