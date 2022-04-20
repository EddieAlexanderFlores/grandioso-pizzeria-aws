import {useState} from "react";
import styles from "./SignIn.module.css";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import {ErrorType, UserType} from "../../../mylib/MyTypes";
import ConfirmSignUpForm from "./ConfirmSignUpForm";
import {ISignUpResult, CognitoUser} from "amazon-cognito-identity-js";
import {Auth} from "aws-amplify";

const SignIn = () => {
  const [formType, setFormType] = useState<string>("signin");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  let formContent: JSX.Element;

  window.scrollTo({top: 0, left: 0, behavior: "auto"});

  const signInUserHandler = async (email: string, password: string) => {
    setIsButtonDisabled(true); // set to true.
    window.sessionStorage.setItem("email", email);
    console.log("username:", email);
    try {
      const user: CognitoUser = await Auth.signIn(email, password);
    } catch (error) {
      setIsButtonDisabled(false); // set to false
      resolveError(error as ErrorType);
    }
  };

  const signUpUserHandler = async (user: Omit<UserType, "address">) => {
    setIsButtonDisabled(true); // Set to true.
    window.sessionStorage.setItem("email", user.email);
    window.sessionStorage.setItem("firstName", user.firstName);
    window.sessionStorage.setItem("lastName", user.lastName);

    try {
      const credentials: ISignUpResult = await Auth.signUp({
        username: user.email,
        password: user.password,
        attributes: {
          given_name: user.firstName,
          family_name: user.lastName,
          email: user.email,
          phone_number: "+1" + user.telephone,
          address: "",
        },
      });
      console.log("Sign Up Successful");
      console.log("Confirm code");
      setIsButtonDisabled(false); // set to false
      setFormType("confirm");
    } catch (error) {
      setIsButtonDisabled(false); // set to false
      resolveError(error as ErrorType);
    }
  };

  const confirmSignUpHandler = async (code: string) => {
    setIsButtonDisabled(true);
    const email: string = window.sessionStorage.getItem("email")!;
    try {
      await Auth.confirmSignUp(email, code);
      console.log("SignUp Confirmed!");
      window.alert("Your email has been confirmed. Please Sign In.");
      setIsButtonDisabled(false);
      setFormType("signin");
    } catch (error) {
      setIsButtonDisabled(false);
      resolveError(error as ErrorType);
    }
  };

  const resendConfirmationCode = async () => {
    const email: string = window.sessionStorage.getItem("email")!;
    try {
      console.log("Resending code to:", email);
      await Auth.resendSignUp(email);
      console.log("code resent successfully");
    } catch (error) {
      resolveError(error as ErrorType);
    }
  };

  const resolveError = (error: ErrorType) => {
    console.log(error);
    window.alert(error.message);
    switch (error.code) {
      case "UserNotConfirmedException":
        console.log("User is not confirmed.");
        setFormType("confirm");
        resendConfirmationCode();
        break;
      case "CodeMismatchException":
        console.log("Invalid verification code provided, please try again.");
        break;
      case "NotAuthorizedException":
        console.log("Incorrect username or password.");
        break;
      case "UserNotFoundException":
        console.log("User does not exist.");
        break;
      case "UsernameExistsException":
        console.log("An account with the given email already exists.");
        // Take them to Sign In Form
        break;
      default:
        break;
    }
  };

  const signinTabClickHandler = () => {
    setFormType("signin");
  };

  const signupTabClickHandler = () => {
    setFormType("signup");
  };

  switch (formType) {
    case "signin":
      formContent = (
        <SignInForm
          isButtonDisabled={isButtonDisabled}
          onSubmitSignInForm={signInUserHandler}
        />
      );
      break;
    case "signup":
      formContent = (
        <SignUpForm
          isButtonDisabled={isButtonDisabled}
          onSubmitSignUpForm={signUpUserHandler}
        />
      );
      break;
    case "confirm":
      formContent = (
        <ConfirmSignUpForm
          isButtonDisabled={isButtonDisabled}
          onSubmitConfirmSignUp={confirmSignUpHandler}
        />
      );
      break;
    default:
      formContent = (
        <SignInForm
          isButtonDisabled={isButtonDisabled}
          onSubmitSignInForm={signInUserHandler}
        />
      );
      break;
  }

  return (
    <div className={styles.signin}>
      {formType !== "confirm" && (
        <ul className={styles.tabs}>
          <li className={styles.tab}>
            <button
              className={formType === "signin" ? styles.active : styles.button}
              onClick={signinTabClickHandler}
            >
              SIGN IN
            </button>
          </li>
          <li className={styles.tab}>
            <button
              className={formType === "signup" ? styles.active : styles.button}
              disabled={formType === "signup"}
              onClick={signupTabClickHandler}
            >
              SIGN UP
            </button>
          </li>
        </ul>
      )}

      {formContent}
    </div>
  );
};

export default SignIn;
