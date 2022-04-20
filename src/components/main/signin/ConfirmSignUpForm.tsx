import {FormEvent, useRef} from "react";
import LoaderIcon from "../../ui/icons/LoaderIcon";
import styles from "./SignInForm.module.css";

type Props = {
  isButtonDisabled: boolean;
  onSubmitConfirmSignUp: (code: string) => void;
};

const ConfirmSignUpForm = (props: Props) => {
  const codeRef = useRef<HTMLInputElement>(null);
  const submitFormHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmitConfirmSignUp(codeRef.current!.value);
  };

  return props.isButtonDisabled ? (
    <div className={styles.loader}>
      <h3 className={styles.title}>Confirming . . .</h3>
      <LoaderIcon />
    </div>
  ) : (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <h3 className={styles.title}>We Emailed You</h3>
      <p className={styles.message}>
        To sign in, enter the code we sent to the email you provided. It may
        take a minute to arrive.
      </p>
      <label className={styles.label} htmlFor="code">
        Confirmation Code *
      </label>
      <input
        className={styles.input}
        id="code"
        type="number"
        name="code"
        required={true}
        autoComplete="off"
        ref={codeRef}
      />
      <button
        className={styles.button}
        type="submit"
        disabled={props.isButtonDisabled}
      >
        CONFIRM
      </button>
    </form>
  );
};

export default ConfirmSignUpForm;
