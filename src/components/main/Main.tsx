import {useAppSelector} from "../../appStore/hooks";
import {RootState} from "../../appStore/store";
import UserAccount from "./account/UserAccount";
import Cart from "./cart/Cart";
import styles from "./Main.module.css";
import Menu from "./menu/Menu";
import SignIn from "./signin/SignIn";

type Props = {
  content: string;
};

const Main = (props: Props) => {
  const user = useAppSelector((state: RootState) => state.user);

  let content: JSX.Element = <Menu />;

  switch (props.content) {
    case "menu":
      content = <Menu />;
      break;
    case "signin":
      if (user.firstName) {
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
