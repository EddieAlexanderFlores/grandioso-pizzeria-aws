import React, {useState} from "react";
import styles from "./UserAccount.module.css";

const UserAccount = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const signOutHandler = async () => {
    console.log("Sign Out");
    // setIsButtonDisabled(true);
    // try {
    //   await signOut(auth);
    //   console.log("Sign-Out Successful");
    // } catch (error) {
    //   console.log("Sign Out Error:", error);
    //   setIsButtonDisabled(false);
    // }
  };

  return (
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
