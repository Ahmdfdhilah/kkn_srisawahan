import styles from "../styles/map.module.scss";
import React from "react";
import { motion } from "framer-motion";
import { images } from "../constants";
import Image from "next/image";

const about = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={styles["map-container"]}
    >
      <h3>Peta</h3>
      <h2>Peta daya dukung</h2>
      <p>
      Peta yang menggambarkan kemampuan suatu area atau lahan untuk menanggung aktivitas manusia atau pemanfaatan sumber daya alam tanpa merusak ekosistemnya.
      Digunakan untuk memastikan bahwa pemanfaatan lahan tidak melebihi kapasitas alamiahnya, sehingga dapat berkontribusi pada pelestarian lingkungan dan keberlanjutan.
      </p>
      <br/>
      <Image
            src={images.map}
            alt="Plants example"
            height={515}
            width={700}
          />
    </motion.div>
  );
};

export default about;
