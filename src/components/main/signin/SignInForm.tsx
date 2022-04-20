import {FormEvent, useRef} from "react";
import LoaderIcon from "../../ui/icons/LoaderIcon";
import styles from "./SignInForm.module.css";

type Props = {
  isButtonDisabled: boolean;
  onSubmitSignInForm: (email: string, password: string) => void;
};

const SignInForm = (props: Props) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitFormHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmitSignInForm(
      emailRef.current!.value,
      passwordRef.current!.value
    );
  };

  return props.isButtonDisabled ? (
    <div className={styles.loader}>
      <h3 className={styles.title}>Signing In . . .</h3>
      <LoaderIcon />
    </div>
  ) : (
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
        ref={emailRef}
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
        ref={passwordRef}
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
