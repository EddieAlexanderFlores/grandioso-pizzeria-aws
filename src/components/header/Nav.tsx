import {MouseEvent, useState} from "react";
import {useAppSelector} from "../../appStore/hooks";
import {RootState} from "../../appStore/store";
import CartButton from "./CartButton";
import styles from "./Nav.module.css";

type Props = {
  onNavMenuClick: (text: string) => void;
};

const Nav = (props: Props) => {
  const userName = useAppSelector((state: RootState) => state.user.firstName);
  const [activeNavMenu, setActiveNavMenu] = useState<string>("menu");

  const navMenuClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.name);
    const navMenuSelected: string = event.currentTarget.name;
    setActiveNavMenu(navMenuSelected);
    props.onNavMenuClick(navMenuSelected);
  };

  const shortName = userName?.slice(0, 9);

  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        <li className={styles.link}>
          <button
            className={activeNavMenu === "menu" ? styles.active : styles.button}
            name="menu"
            disabled={activeNavMenu === "menu"}
            onClick={navMenuClickHandler}
          >
            MENU
          </button>
        </li>
        <li className={styles.link}>
          <button
            className={
              activeNavMenu === "signin" ? styles.active : styles.button
            }
            name="signin"
            disabled={activeNavMenu === "signin"}
            onClick={navMenuClickHandler}
          >
            {shortName ? `Hi, ${shortName}` : `SIGN IN`}
          </button>
        </li>
        <li className={styles.link}>
          <CartButton
            className={activeNavMenu === "cart" ? styles.active : styles.button}
            name="cart"
            disabled={activeNavMenu === "cart"}
            onClick={navMenuClickHandler}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
