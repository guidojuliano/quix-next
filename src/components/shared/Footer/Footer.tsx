import styles from "./Footer.module.sass";

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p>QuiX © {new Date().getFullYear()}</p>
      <p>Created by Guido Juliano Ubaldi</p>
    </footer>
  );
};
