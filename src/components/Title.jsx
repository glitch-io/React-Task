import React from "react";
import styles from "./Header.module.css";
function Title({ title }) {
  return <h2 className={styles.bottomNav}>Popular {title}</h2>;
}

export default Title;
