import {FormEvent, useRef} from "react";
import styles from "./SignInForm.module.css";

type Props = {
  isButtonDisabled: boolean;
  onSubmitSignInForm: (email: string, password: string) => void;
};

const SignInForm = (props: Props) => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const submitFormHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(emailInputRef.current?.value, passwordInputRef.current?.value);
    const email = emailInputRef.current!.value;
    const password = passwordInputRef.current!.value;
    props.onSubmitSignInForm(email, password);
  };

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <label className={styles.label} htmlFor="email">
        Email Address *
      </label>
      <input
        className={styles.input}
        id="email"
        type="email"
        name="email"
        autoComplete="email"
        required={true}
        maxLength={100}
        ref={emailInputRef}
      />
      <label className={styles.label} htmlFor="password">
        Password *
      </label>
      <input
        className={styles.input}
        id="password"
        type="password"
        name="password"
        autoComplete="current-password"
        required={true}
        maxLength={100}
        ref={passwordInputRef}
      />
      <button
        className={styles.button}
        type="submit"
        disabled={props.isButtonDisabled}
      >
        SIGN IN
      </button>
    </form>
  );
};

export default SignInForm;
