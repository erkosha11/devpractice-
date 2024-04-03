import styles from "./footer.module.css";
import instaLogo from "../media/805.png";
import React from "react";

type MenuItems = {
  name: string;
  link: string;
};

type FooterProps = {
  navbar: MenuItems[];
};

const Footer: React.FC<FooterProps> = ({ navbar }) => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.headerDerivative}>
        <div className={styles.Navbar}>
          <ul className={styles.containerMenu}>
            {navbar.map((item, index) => (
              <li key={index} className={styles.li}>
                <a href={item.link} className={styles.textBar}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.logo}>
          <img src={instaLogo} alt="Dev Practice" className={styles.logo} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
