import {FormEvent} from "react";
import styles from "./SignInForm.module.css";

type Props = {
  isButtonDisabled: boolean;
  onSubmitSignUpForm: (
    fname: string,
    lname: string,
    phone: number,
    email: string,
    password: string
  ) => void;
};

const SignUpForm = (props: Props) => {
  const submitFormHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.currentTarget.fname.value);
    const fname = event.currentTarget.fname.value;
    const lname = event.currentTarget.lname.value;
    const phone = event.currentTarget.phone.value;
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    props.onSubmitSignUpForm(fname, lname, phone, email, password);
  };

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <label className={styles.label} htmlFor="fname">
        First Name *
      </label>
      <input
        className={styles.input}
        id="fname"
        type="text"
        name="fname"
        autoComplete="given-name"
        required={true}
        maxLength={50}
      />
      <label className={styles.label} htmlFor="lname">
        Last Name *
      </label>
      <input
        className={styles.input}
        id="lname"
        type="text"
        name="lname"
        autoComplete="family-name"
        required={true}
        maxLength={50}
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
      />
      <label className={styles.label} htmlFor="phone">
        Phone Number *
      </label>
      <input
        className={styles.input}
        id="phone"
        type="tel"
        name="phone"
        autoComplete="tel-national"
        required={true}
        maxLength={10}
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
