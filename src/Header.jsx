import React from "react";
import LogoSvg from "./logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.Header}>
      <LogoSvg className={styles.logo} />
      <h1>Application Portal</h1>
    </div>
  );
};

export default Header;
