import { Link } from "react-router-dom";
import styles from "./Header.module.css";
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.topNav}>
        <h1>DEMO Streaming</h1>
        <nav>
          <Link to={"/login"}>Log in</Link>
          <button>Start your free trail</button>
        </nav>
      </div>
    </div>
  );
}

export default Header;
