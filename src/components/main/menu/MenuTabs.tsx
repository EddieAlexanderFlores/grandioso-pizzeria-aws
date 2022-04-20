import {MouseEvent, MouseEventHandler} from "react";
import {useAppDispatch, useAppSelector} from "../../../appStore/hooks";
import {RootState} from "../../../appStore/store";
import {setMenuContent} from "../../../appStore/slices/menuSlice";
import styles from "./MenuTabs.module.css";
import {MenuContentType, MenuSelectionType} from "../../../mylib/MyTypes";

const MenuTabs = () => {
  const selection = useAppSelector((state: RootState) => state.menu.selection);
  const dispatch = useAppDispatch();

  const setContentHandler = (event: MouseEvent<HTMLButtonElement>) => {
    const content: MenuContentType = {
      selection: event.currentTarget.name as MenuSelectionType,
    };
    dispatch(setMenuContent(content));
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.tabs}>
        <li className={styles.tab}>
          <button
            className={styles.button}
            name="pizza"
            disabled={selection === "pizza"}
            onClick={setContentHandler}
          >
            Pizza
          </button>
        </li>
        <li className={styles.tab}>
          <button
            className={styles.button}
            name="sides"
            disabled={selection === "sides"}
            onClick={setContentHandler}
          >
            Sides
          </button>
        </li>
        <li className={styles.tab}>
          <button
            className={styles.button}
            name="drinks"
            disabled={selection === "drinks"}
            onClick={setContentHandler}
          >
            Drinks
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MenuTabs;
