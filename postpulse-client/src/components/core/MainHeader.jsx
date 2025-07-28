import { MdPostAdd, MdMessage } from "react-icons/md";
import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

function MainHeader({ onCreatePost }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage color="#a25032" />
        Postpulse
      </h1>
      <p></p>
    </header>
  );
}

export default MainHeader;
