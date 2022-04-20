import styles from "./Header.module.css";
import Nav from "./Nav";
import {Storage} from "aws-amplify";
import {useEffect, useState} from "react";
import LoaderIcon from "../ui/icons/LoaderIcon";

const Header = () => {
  const [banner, setBanner] = useState<string>();
  const [logo, setLogo] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchImages = async () => {
      try {
        const bannerURL = await Storage.get("images/header/banner-01.jpg", {
          level: "public",
        });

        const logoURL = await Storage.get("images/header/grandioso-logo.png", {
          level: "public",
        });
        setBanner(bannerURL);
        setLogo(logoURL);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  return isLoading ? (
    <div className={styles.loader}>
      <LoaderIcon />
    </div>
  ) : (
    <header className={styles.header}>
      <div className={styles["banner-wrapper"]}>
        <img
          className={styles.banner}
          src={banner}
          alt="Grandioso Pizzeria banner"
        />
      </div>
      <div className={styles["logo-wrapper"]}>
        <img className={styles.logo} src={logo} alt="Grandioso Pizzeria logo" />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
