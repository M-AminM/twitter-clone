import React from "react";
import Image from "next/image";
import styles from "./menu.module.scss";
import { menuData } from "../../data/menu-data";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface Props {
  session: any;
}

const Menu: React.FC<Props> = ({ session }) => {
  return (
    <section className={styles.menu}>
      <div className={styles.center}>
        <div className={styles.menu__head}>
          <Image
            src="/assets/twitter_logo.png"
            alt="twitterLogo"
            width={35}
            height={30}
            className={styles.menu__icon}
          />
          {session && (
            <button className={styles.menu__signout} onClick={() => signOut()}>
              Sign out
            </button>
          )}
        </div>
        <div className={styles.menu__data}>
          {menuData.map((data) => (
            <div className={styles.menu__links} key={data.id}>
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
