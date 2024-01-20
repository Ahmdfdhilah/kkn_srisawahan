import React, { useState, useEffect } from "react";
import styles from "./Plants.module.scss";
import { motion } from "framer-motion";
import CardPlantList from "./card/CardPlantList";

const Plants = ({ products }) => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState([]);
  useEffect(() => {
    setFilterWork(products);
  }, []);


  return (
    <section
      className={`${styles["section-plants"]}container padding-top margin-top`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`container margin-top`}
      >
        <h3 id="plants" className="margin-bottom">
          Tanaman
        </h3>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.4, delayChildren: 0.4 }}
          className={`${styles["card__container"]}`}
        >
          {filterWork?.map((product) => (
            <CardPlantList product={product} key={product.id} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Plants;
