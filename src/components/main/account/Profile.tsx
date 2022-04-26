import {Fragment, MouseEventHandler} from "react";
import {useAppSelector} from "../../../appStore/hooks";
import {RootState} from "../../../appStore/store";
import styles from "./Profile.module.css";

type Props = {onBackButtonClick: MouseEventHandler<HTMLButtonElement>};

const Profile = (props: Props) => {
  const user = useAppSelector((state: RootState) => state.user);

  return (
    <Fragment>
      <button
        className={styles["back-button"]}
        onClick={props.onBackButtonClick}
      >{`< Account`}</button>
      <div className={styles.info}>
        <div className={styles.label}>Name:</div>
        <div className={styles.data}>
          {user.firstName + " " + user.lastName}
        </div>
        <div className={styles.label + " " + styles["margin-top"]}>Email:</div>
        <div className={styles.data}>{user.email}</div>
      </div>
    </Fragment>
  );
};

export default Profile;
