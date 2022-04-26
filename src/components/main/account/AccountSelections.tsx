import {Fragment, MouseEventHandler, useState} from "react";
import {Auth} from "aws-amplify";
import LoaderIcon from "../../ui/icons/LoaderIcon";
import styles from "./AccountSelections.module.css";

type Props = {
  onSelect: MouseEventHandler<HTMLButtonElement>;
};

const AccountSelections = (props: Props) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  const signOutHandler = async () => {
    console.log("Sign Out");
    setIsButtonDisabled(true);
    try {
      await Auth.signOut();
      console.log("Sign-Out Successful");
    } catch (error) {
      console.log("Sign Out Error:", error);
      setIsButtonDisabled(false);
    }
  };

  return isButtonDisabled ? (
    <Fragment>
      <div className={styles.loader}>
        <h3 className={styles.title}>Signing Out . . .</h3>
        <LoaderIcon />
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <ul className={styles.nav}>
        <li className={styles.option}>
          <button
            className={styles.optionbtn}
            name="orders"
            onClick={props.onSelect}
          >
            Orders
          </button>
        </li>
        <li className={styles.option}>
          <button
            className={styles.optionbtn}
            name="profile"
            onClick={props.onSelect}
          >
            Profile
          </button>
        </li>
      </ul>
      <button
        className={styles.signoutbtn}
        disabled={isButtonDisabled}
        onClick={signOutHandler}
      >
        SIGN OUT
      </button>
    </Fragment>
  );
};

export default AccountSelections;
