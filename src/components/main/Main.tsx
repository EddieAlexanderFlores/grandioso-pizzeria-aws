import {useAppSelector} from "../../appStore/hooks";
import {RootState} from "../../appStore/store";
import UserAccount from "./account/UserAccount";
import Cart from "./cart/Cart";
import styles from "./Main.module.css";
import Menu from "./menu/Menu";
import SignIn from "./signin/SignIn";

const Main = () => {
  const username = useAppSelector((state: RootState) => state.user.firstName);
  const selection = useAppSelector((state: RootState) => state.main.selection);

  let content: JSX.Element = <Menu />;

  switch (selection) {
    case "menu":
      content = <Menu />;
      break;
    case "signin":
      if (username) {
        content = <UserAccount />;
      } else {
        content = <SignIn />;
      }
      break;
    case "cart":
      content = <Cart />;
      break;
    default:
      content = <Menu />;
      break;
  }

  return <main className={styles.main}>{content}</main>;
};

export default Main;
