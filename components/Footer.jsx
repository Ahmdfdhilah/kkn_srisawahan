import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Logo from "../images/plantito-logo.svg";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="container grid grid--5-cols " id="contact">
      <div className={styles["logo-col"]}>
        <Link href="/">
          <div className={styles.logo}>
            <Logo />
            <span> Sri Sawahan</span>
          </div>
        </Link>
        <address className={styles.contacts}>
          <p className={styles.address}>
          Jl. Raya Srisawahan RT 007 Dusun II Kecamatan Punggur Kabupaten Lampung Tengah Provinsi Lampung
          </p>
          <p>
            <a className={styles["footer-link"]} href="tel:6289647107815">
             +6289647107815
            </a>
            <br />
            <a
              className={styles["footer-link"]}
              href="mailto:ahmad.fadilah0210@gmail.com"
            >
              ahmad.fadilah0210@gmail.com
            </a>
          </p>
        </address>
      </div>
    </div>
  );
};

export default Footer;
