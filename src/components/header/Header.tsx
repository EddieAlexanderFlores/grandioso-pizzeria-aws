import {baseURL} from "../../mylib/myURL";
import styles from "./Header.module.css";
import Nav from "./Nav";

type Props = {
  onNavMenuSelect: (text: string) => void;
};

const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles["banner-wrapper"]}>
        <img
          className={styles.banner}
          src={`${baseURL}/assets/?image=banner/banner-01.jpg`}
          alt="Grandioso Pizzeria banner"
        />
      </div>
      <div className={styles["logo-wrapper"]}>
        <img
          className={styles.logo}
          src={`${baseURL}/assets/?image=logo/grandioso-logo.png`}
          alt="Grandioso Pizzeria logo"
        />
      </div>
      <Nav onNavMenuClick={props.onNavMenuSelect} />
    </header>
  );
};

export default Header;
