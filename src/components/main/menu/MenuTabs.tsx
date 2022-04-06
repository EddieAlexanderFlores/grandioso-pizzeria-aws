import {MouseEventHandler} from "react";
import styles from "./MenuTabs.module.css";

type Props = {
  onCategorySelect: MouseEventHandler<HTMLButtonElement>;
  activeTab: string;
};

const MenuTabs = (props: Props) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.tabs}>
        <li className={styles.tab}>
          <button
            className={
              props.activeTab === "pizza" ? styles.active : styles.button
            }
            name="pizza"
            disabled={props.activeTab === "pizza"}
            onClick={props.onCategorySelect}
          >
            Pizza
          </button>
        </li>
        <li className={styles.tab}>
          <button
            className={
              props.activeTab === "sides" ? styles.active : styles.button
            }
            name="sides"
            disabled={props.activeTab === "sides"}
            onClick={props.onCategorySelect}
          >
            Sides
          </button>
        </li>
        <li className={styles.tab}>
          <button
            className={
              props.activeTab === "drinks" ? styles.active : styles.button
            }
            name="drinks"
            disabled={props.activeTab === "drinks"}
            onClick={props.onCategorySelect}
          >
            Drinks
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MenuTabs;
