import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { motion } from "framer-motion";
import { useStateContext } from "../context/StateContext";
import Logo from "../images/plantito-logo.svg";
const Navbar = () => {
  const { active, setActive } =
    useStateContext();

  const handleClick = () => {
    if (active === true) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className={styles["navbar-container"]}>
        <div className={styles.burger}>
          <div
            className={
              active === false
                ? `${styles.strip} ${styles["burger-strip-2"]}`
                : `${styles.strip} ${styles["burger-strip-2"]} ${styles.active}`
            }
            onClick={() => handleClick()}
          >
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
          </div>
        </div>
        <nav
          className={
            active === true
              ? `${styles["nav-links"]} ${styles["nav-links-active"]}`
              : `${styles["nav-links"]}`
          }
        >
          <ul>
            {active && (
              <Link href="/">
                <div onClick={() => setActive(false)} className={styles.logo2}>
                  <Logo />
                  <span> </span>
                </div>
              </Link>
            )}
            <li onClick={() => setActive(false)}>
              <Link href="/#plants">Tanaman</Link>
            </li>
            <li onClick={() => setActive(false)}>
              <Link href="/about">Tentang</Link>
            </li>
            <li onClick={() => setActive(false)}>
              <Link href="/map">Peta</Link>
            </li>
          </ul>
        </nav>
        <div
          className={active ? `${styles.overlay}` : ""}
          onClick={() => setActive(false)}
        ></div>
        <Link href="/">
          <div className={styles.logo}>
            <span> Lahan Hijau Sri Sawahan</span>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
