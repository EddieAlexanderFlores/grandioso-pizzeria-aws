import {useState} from "react";
import styles from "./SignIn.module.css";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const SignIn = () => {
  const [activeTab, setActiveTab] = useState("signin");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  window.scrollTo({top: 0, left: 0, behavior: "auto"});

  const signInUserHandler = async (email: string, password: string) => {
    setIsButtonDisabled(true);
    try {
      // const userCredential = await signInWithEmailAndPassword(
      //   auth,
      //   email,
      //   password
      // );
      // const user = userCredential.user;
      // setUserName(user.displayName);
    } catch (error) {
      console.log(error);
      setIsButtonDisabled(false);
    }
  };

  const signUpUserHandler = async (
    fname: string,
    lname: string,
    phone: number,
    email: string,
    password: string
  ) => {
    setIsButtonDisabled(true);
    try {
      // const userCredential = await createUserWithEmailAndPassword(
      //   auth,
      //   email,
      //   password
      // );
      // console.log("New User Created. Updating Name...");
      // const newUser = userCredential.user;
      // await updateProfile(newUser, {displayName: fname});
      // console.log("Updated User Name:", newUser.displayName);
      // setUserName(newUser.displayName);
      // console.log("Adding New User to Database...");
      // const newUserDocRef = doc(db, `users/${userCredential.user.uid}`);
      // const newUserDocData = {
      //   fname,
      //   lname,
      //   phone,
      //   email,
      // };
      // await setDoc(newUserDocRef, newUserDocData);
      // console.log(`${newUser.displayName} added to Database`);
    } catch (error) {
      console.log(error);
      setIsButtonDisabled(false);
    }
  };

  const signinTabClickHandler = () => {
    setActiveTab("signin");
  };

  const signupTabClickHandler = () => {
    setActiveTab("signup");
  };

  return (
    <div className={styles.signin}>
      <ul className={styles.tabs}>
        <li className={styles.tab}>
          <button
            className={activeTab === "signin" ? styles.active : styles.button}
            disabled={activeTab === "signin"}
            onClick={signinTabClickHandler}
          >
            SIGN IN
          </button>
        </li>
        <li className={styles.tab}>
          <button
            className={activeTab === "signup" ? styles.active : styles.button}
            disabled={activeTab === "signup"}
            onClick={signupTabClickHandler}
          >
            SIGN UP
          </button>
        </li>
      </ul>
      {activeTab === "signin" ? (
        <SignInForm
          isButtonDisabled={isButtonDisabled}
          onSubmitSignInForm={signInUserHandler}
        />
      ) : (
        <SignUpForm
          isButtonDisabled={isButtonDisabled}
          onSubmitSignUpForm={signUpUserHandler}
        />
      )}
    </div>
  );
};

export default SignIn;
