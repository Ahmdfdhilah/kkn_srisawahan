import React from "react";
import styles from "../../styles/Product.module.scss";
import { CardPlantList } from "../../components";
import { motion } from "framer-motion";
import fs from 'fs';
import path from 'path';

const ProductDetails = ({ products, product }) => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className={styles["product-detail-container"]}>
        <div className={styles["product-detail-desc"]}>
          <h4>{product.name}</h4>
          <div className={styles.reviews}>
            <p>{product.latin}</p>
          </div>
          <span className={styles.details}>Penjelasan :</span>
          <p className={styles.details}>{product.details}</p>
          <span className={styles.details}>Cocok untuk :</span>
          <p className={styles.details}>{product.summary}</p>

        </div>
      </div>

      <div className={styles["maylike-products-wrapper"]}>
        <h2>Lihat Yang Lain</h2>
        <div className={styles.marquee}>
          <div
            className={`${styles["maylike-products-container"]} ${styles.track}`}
          >
            {products.map((item) => (
              <CardPlantList
                key={item.id}
                product={item}
                className={styles["media-element"]}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export const getStaticPaths = async () => {
  const filePath = path.join(process.cwd(), './public/data.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(jsonData);

  const paths = products.map((product) => ({
    params: {
      slug: product.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const filePath = path.join(process.cwd(), './public/data.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  const product = data.find(item => item.current === slug);

  return {
    props: { products: data, product },
  };
};

export default ProductDetails;
