import classes from "./Buttons.module.css";
import { useAuth0 } from "@auth0/auth0-react";

export function SignupButon() {
  const { loginWithRedirect } = useAuth0();

  const handleSignup = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/feed",
      },
      authorizationParams: {
        prompt: "signup",
        screen_hint: "signup",
      },
    });
  };

  return (
    <button className={classes.button} text="Sign up" onClick={handleSignup}>
      Sign up
    </button>
  );
}
