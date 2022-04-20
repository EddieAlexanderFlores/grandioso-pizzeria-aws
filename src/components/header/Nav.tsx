import {MouseEvent} from "react";
import {useAppDispatch, useAppSelector} from "../../appStore/hooks";
import {setMainContent} from "../../appStore/slices/mainSlice";
import {RootState} from "../../appStore/store";
import {MainContentType, MainSelectionType} from "../../mylib/MyTypes";
import CartButton from "./CartButton";
import styles from "./Nav.module.css";

const Nav = () => {
  const userName = useAppSelector((state: RootState) => state.user.firstName);
  const selection = useAppSelector((state: RootState) => state.main.selection);
  const dispatch = useAppDispatch();

  const setContentHandler = (event: MouseEvent<HTMLButtonElement>) => {
    const content: MainContentType = {
      selection: event.currentTarget.name as MainSelectionType,
    };
    dispatch(setMainContent(content));
  };

  const shortName = userName?.slice(0, 9);

  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        <li className={styles.link}>
          <button
            className={styles.button}
            name="menu"
            disabled={selection === "menu"}
            onClick={setContentHandler}
          >
            MENU
          </button>
        </li>
        <li className={styles.link}>
          <button
            className={styles.button}
            name="signin"
            disabled={selection === "signin"}
            onClick={setContentHandler}
          >
            {shortName ? `Hi, ${shortName}` : `SIGN IN`}
          </button>
        </li>
        <li className={styles.link}>
          <CartButton
            className={styles.button}
            name="cart"
            disabled={selection === "cart"}
            onClick={setContentHandler}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
