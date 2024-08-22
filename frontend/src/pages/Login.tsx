import { StyleMap } from "../types/types";
import login_background from "../assets/login_background.svg";
import { EmailInput, PasswordInput } from "../components/FormElements";
import { useMediaQuery } from "../hooks/useMediaQuery";
const Login = () => {
  const mediaQuery = {
    max768: useMediaQuery("(max-width:769px)"),
    max425: useMediaQuery("(max-width:426px)"),
    min768: useMediaQuery("(min-width:768px)"),
  };
  const styles: StyleMap<LoginStyles> = {
    container: {
      height: "100%",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: mediaQuery.min768
        ? "flex-end"
        : mediaQuery.max425
        ? "flex-end"
        : "center",
      flexDirection: mediaQuery.max425 ? "column" : "row",
    },
    card: {
      marginRight: mediaQuery.max768 ? "0" : "10rem",
      marginBottom: mediaQuery.max425 ? "4rem" : "0",
      padding: mediaQuery.min768 ? "50px 20px" : "25px 15px",
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.17)",
      width: mediaQuery.min768 ? "" : "90%",
    },
    login_background: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -1,
    },
    align_text: {
      textAlign: mediaQuery.max768 ? "center" : "right",
    },
    submit_button: {
      display: "block",
      margin: `20px ${mediaQuery.min768 ? 0 : "auto"} 0 auto`,
      padding: "5px 30px",
    },
    product_name: {
      background:
        "linear-gradient(0deg, rgba(0,0,255,1) -70%, rgba(0,255,255,1) 100%)",
      backgroundClip: "text",
      color: "transparent",
      fontSize: "32px",
      marginBottom: "50px",
      fontWeight: 400,
    },
    text_margin: {
      margin: "5px 20px 0 0",
    },
    form_element: {
      width: "100%",
      margin: mediaQuery.max768 ? "10px 0" : "2px 0",
    },
    trouble: {
      fontStyle: "italic",
      fontSize: "small",
      marginTop: "5px",
      cursor: "pointer",
    },
  };

  const greetingsWithProductName = (
    <>
      <h4 style={{ ...styles.align_text }}>Welcome</h4>
      <p style={{ ...styles.align_text, ...styles.product_name }}>
        Moviedata Tracker
      </p>
    </>
  );
  return (
    <div data-page="Login" style={styles.container}>
      <img
        src={login_background}
        alt="login_background"
        style={styles.login_background}
      />
      {mediaQuery.max425 && greetingsWithProductName}
      <div className="card" style={styles.card}>
        {!mediaQuery.max425 && greetingsWithProductName}
        <p style={{ ...styles.align_text, ...styles.text_margin }}>
          Sign in to continue
        </p>
        <form>
          {mediaQuery.min768 && (
            <p style={{ ...styles.align_text, ...styles.text_margin }}>Email</p>
          )}
          <EmailInput
            changeFn={() => {}}
            error={false}
            id="email"
            inputFn={() => {}}
            name="email"
            placeholder="Enter you email"
            style={styles.form_element}
          />
          {mediaQuery.min768 && (
            <p style={{ ...styles.align_text, ...styles.text_margin }}>
              Password
            </p>
          )}
          <PasswordInput
            changeFn={() => {}}
            error={false}
            id="password"
            inputFn={() => {}}
            name="password"
            placeholder="Enter you email"
            style={styles.form_element}
          />
          <button
            type="button"
            className="btn-primary-full"
            style={styles.submit_button}
            disabled
          >
            Submit
          </button>
          <p style={{ ...styles.align_text, ...styles.trouble }}>
            Trouble Logging in? Click here
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

type LoginStyles =
  | "container"
  | "card"
  | "login_background"
  | "align_text"
  | "submit_button"
  | "product_name"
  | "text_margin"
  | "form_element"
  | "trouble";
