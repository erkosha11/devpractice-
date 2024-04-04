import React from "react";
import styles from "./header.module.css";
import headerLogo from "../../media/Dev Practice.png";

type MenuItem = {
  name: string;
  link: string;
};

type HeaderProps = {
  menuItems: MenuItem[];
};

const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerDerivative}>
        <div className={styles.logo}>
          <img src={headerLogo} alt="Dev Practice" className={styles.logo} />
        </div>
        <div className={styles.Navbar}>
          <ul className={styles.containerMenu}>
            {menuItems.map((item, index) => (
              <li key={index} className={styles.li}>
                <a href={item.link} className={styles.textBar}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
