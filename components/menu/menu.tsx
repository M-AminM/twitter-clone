import React from "react";
import Image from "next/image";
import styles from "./menu.module.scss";
import { menuData } from "../../data/menu-data";
import Link from "next/link";

const Menu = () => {
  return (
    <section className={styles.menu}>
      <div className={styles.center}>
        <Image
          src="/assets/twitter_logo.png"
          alt="twitterLogo"
          width={35}
          height={30}
          className={styles.menu__icon}
        />
        <div className={styles.menu__data}>
          {menuData.map((data) => (
            <div className={styles.menu__links}>
              <Image src={data.icon} alt={data.name} width={30} height={25} />
              <Link className={styles.menu__link} href="/">
                {data.name}
              </Link>
            </div>
          ))}
        </div>{" "}
      </div>
    </section>
  );
};

export default Menu;
