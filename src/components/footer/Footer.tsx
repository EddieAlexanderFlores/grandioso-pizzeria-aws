import FacebookIcon from "../ui/icons/FacebookIcon";
import InstagramIcon from "../ui/icons/InstagramIcon";
import TwitterIcon from "../ui/icons/TwitterIcon";
import YouTubeIcon from "../ui/icons/YouTubeIcon";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social}>
        <li>
          <FacebookIcon />
        </li>
        <li>
          <InstagramIcon />
        </li>
        <li>
          <TwitterIcon />
        </li>
        <li>
          <YouTubeIcon />
        </li>
      </ul>
      <ul className={styles.links}>
        <li>About Us</li>
        <li>Our Food</li>
        <li>Contact Us</li>
        <li>Careers</li>
      </ul>
      <ul className={styles.legal}>
        <li>Privacy</li>
        <li>Cookies</li>
        <li>Terms of Use</li>
        <li>Do Not Sell My Info</li>
      </ul>
      <p className={styles.copyright}>
        {"Website built by "}
        <a href="https://eddiealexanderflores.com">Eddie Alexander Flores</a>
        {" ©2022."}
      </p>
    </footer>
  );
};

export default Footer;
