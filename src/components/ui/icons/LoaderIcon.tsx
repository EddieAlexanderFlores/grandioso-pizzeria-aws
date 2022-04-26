import styles from "./LoaderIcon.module.css";

const LoaderIcon = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoaderIcon;
