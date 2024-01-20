import styles from "../styles/about.module.scss";
import React from "react";
import { motion } from "framer-motion";

const about = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={styles["about-container"]}
    >
      <h3>Tentang Kami</h3>
      <p>
        Sri sawahan, banyak lahan-lahan yang bisa dimanfaatkan untuk tanaman herbal
        atau tanaman obat, kami menyediakan beberapa informasi tentang tanaman dan peta daya dukung dan daya tampung.
        kami juga menyertakan manfaat serta potensi dari tanaman tersebut.
      </p>
    </motion.div>
  );
};

export default about;
