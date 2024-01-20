import React from "react";

import { Hero } from "../components";
import Plants from "../components/Plants";
import { motion } from "framer-motion";
import fs from 'fs';
import path from 'path';
import { images } from "../constants";

const Home = ({products}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Plants products={products} />
    </motion.div>
  );
};

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), './public/data.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);
  // console.log(data[0].name);
  // console.log(images.Tanaman[data[0].name].src);

  return {
    props: { products: data },
  };
};

export default Home;
