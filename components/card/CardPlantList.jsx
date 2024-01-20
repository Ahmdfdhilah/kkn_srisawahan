import React from "react";
import styles from "./Card.module.scss";
import Link from "next/link";
import Image from "next/image";

import { images } from "../../constants";

const CardPlantList = ({
  product: { id, img, name, summary, details, current, latin },
}) => {
  console.log(images.Tanaman[name]);

  return (
    <>
      <Link href={`/product/${current}`}>
        <div className={styles["card__container"]}>
          <div className={styles["card__image"]}>
            <Image
              src={`/tanaman/${img}`}
              width={250}
              height={250}
              className={styles.image} alt={name}
            />
          </div>
          <div className={styles["details-container"]}>
            <div className={styles["details__container"]}>
              <p>{name}</p>
            </div>
            <div className={styles["card__summary"]}>  {details.length > 150 ? `${details.substring(0, 150)} ...Lihat Selengkapnya` : `${details}... Lihat selengkapnya`}</div>
          </div>
          <span className={styles["card__tag"]}>{latin}</span>
        </div>
      </Link>
    </>
  );
};

export default CardPlantList;
