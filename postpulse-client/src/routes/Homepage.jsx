import classes from "./Homepage.module.css";
import { SignupButon } from "../components/SignupButton";

export function Homepage() {
  return (
    <>
      <div className={classes.hpContainer}>
        <h2 className={classes.infoText}>
          Keep your hand on the pulse. Start posting today!
        </h2>
        <div className={classes.previewContainer}>
          <img src={"/ppex.png"}></img>
        </div>
        <div className={classes.buttons}>
          <SignupButon />
          <button text="Log in">Log in</button>
        </div>
      </div>
      <footer className={classes.footer}>
        Marcin Szymanek
        <span className={classes.symbol}>&nbsp;{"\u00A9"}&nbsp;</span>
        2025
      </footer>
    </>
  );
}
