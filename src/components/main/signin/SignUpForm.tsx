import {FormEvent, useRef} from "react";
import {UserType} from "../../../mylib/MyTypes";
import LoaderIcon from "../../ui/icons/LoaderIcon";
import styles from "./SignInForm.module.css";

type Props = {
  isButtonDisabled: boolean;
  onSubmitSignUpForm: (user: Omit<UserType, "address">) => void;
};

const SignUpForm = (props: Props) => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const telephoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitFormHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user: Omit<UserType, "address"> = {
      firstName: firstNameRef.current!.value,
      lastName: lastNameRef.current!.value,
      email: emailRef.current!.value,
      telephone: telephoneRef.current!.value,
      password: passwordRef.current!.value,
    };
    props.onSubmitSignUpForm(user);
  };

  return props.isButtonDisabled ? (
    <div className={styles.loader}>
      <h3 className={styles.title}>Creating Account . . .</h3>
      <LoaderIcon />
    </div>
  ) : (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <label className={styles.label} htmlFor="firstName">
        First Name *
      </label>
      <input
        className={styles.input}
        id="firstName"
        type="text"
        name="firstName"
        autoComplete="given-name"
        required={true}
        maxLength={50}
        ref={firstNameRef}
      />
      <label className={styles.label} htmlFor="lastName">
        Last Name *
      </label>
      <input
        className={styles.input}
        id="lastName"
        type="text"
        name="lastName"
        autoComplete="family-name"
        required={true}
        maxLength={50}
        ref={lastNameRef}
      />
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
        maxLength={50}
        ref={emailRef}
      />
      <label className={styles.label} htmlFor="telephone">
        Phone Number *
      </label>
      <input
        className={styles.input}
        id="telephone"
        type="tel"
        name="telephone"
        autoComplete="tel-national"
        required={true}
        maxLength={10}
        ref={telephoneRef}
      />
      <label className={styles.label} htmlFor="password">
        Create Password *
      </label>
      <input
        className={styles.input}
        id="password"
        type="password"
        name="password"
        autoComplete="off"
        required={true}
        maxLength={50}
        ref={passwordRef}
      />
      <button
        className={styles.button}
        type="submit"
        disabled={props.isButtonDisabled}
      >
        CREATE ACCOUNT
      </button>
    </form>
  );
};

export default SignUpForm;
