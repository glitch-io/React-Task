import { UilInstagram } from "@iconscout/react-unicons";
import { UilTwitterAlt } from "@iconscout/react-unicons";
import { UilFacebookF } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer>
      <p>
        Home | Terms and Conditions | Privacy Policy | Collection Statement |
        Help | Manage Account
      </p>
      <p>Copyright &copy; 2016 DEMO streaming All Rights Reserved.</p>
      <div className={styles.links}>
        <div className={styles.social}>
          <Link>
            <UilFacebookF />
          </Link>
          <Link>
            <UilTwitterAlt />
          </Link>
          <Link>
            <UilInstagram />
          </Link>
        </div>
        <div className={styles.store}>
          <Link>
            <img src="google.png" />
          </Link>
          <Link>
            <img src="apple.png" />
          </Link>
          <Link className={styles.micro}>
            <img src="microsoft.png" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
