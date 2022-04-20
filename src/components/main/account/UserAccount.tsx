import {useState} from "react";
import styles from "./UserAccount.module.css";
import {Auth} from "aws-amplify";
import LoaderIcon from "../../ui/icons/LoaderIcon";

const UserAccount = () => {
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
    <div className={styles.account}>
      <div className={styles.loader}>
        <h3 className={styles.title}>Signing Out . . .</h3>
        <LoaderIcon />
      </div>
    </div>
  ) : (
    <div className={styles.account}>
      <ul className={styles.nav}>
        <li className={styles.option}>
          <button className={styles.optionbtn}>Favorites</button>
        </li>
        <li className={styles.option}>
          <button className={styles.optionbtn}>Past Orders</button>
        </li>
        <li className={styles.option}>
          <button className={styles.optionbtn}>Profile</button>
        </li>
      </ul>
      <button
        className={styles.signoutbtn}
        disabled={isButtonDisabled}
        onClick={signOutHandler}
      >
        SIGN OUT
      </button>
    </div>
  );
};

export default UserAccount;
