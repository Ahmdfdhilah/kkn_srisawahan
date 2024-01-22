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
      <h3>PETA SATUAN KEMAMPUAN LAHAN</h3>
      <p>
        Kemampuan lahan menurut Peraturan Menteri Negara Lingkungan Hidup No 17 tahun
        2009 adalah karakteristik lahan yang mencakup sifat-sifat tanah, topografi, drainase, dan
        kondisi lingkungan hidup lain untuk mendukung kehidupan atau kegiatan pada suatu
        hamparan lahan. Dilakukannya klasifikasi lahan (komponen-komponen lahan) secara
        sistematik dan pengelompokannya ke dalam beberapa kategori berdasarkan atas sifat-sifat
        yang merupakan potensi dan penghambat dalam penggunaannya secara lestari.
        <br />
        Peta Kemampuan Lahan ialah peta yang menggambarkan kemampuan suatu lahan
        untuk mendukung berbagai jenis penggunaan, seperti pertanian, pemukiman, atau
        konservasi. Informasi yang termasuk dalam peta kemampuan lahan mencakup faktor-faktor
        seperti tekstur tanah, kedalaman tanah, ketersediaan air, dan topografi.
        Dalam program kerja Kelompok 90 terdapat pembuatan (Taman Obat Keluarga)
        (TOGA) yang terdapat pada dua titik yakni di Halaman Balai Kampung Sri Sawahan dan
        pada tempat Kelompok Wanita Tani. Pembuatan peta satuan kemampuan lahan untuk
        TOGA merupakan langkah penting dalam memastikan keberlanjutan dan keberhasilan
        program pengembangan tanaman obat keluarga Kampung Sri Sawahan. Pemahaman yang
        baik tentang kondisi lahan dapat membantu mengarahkan upaya pertanian ke arah yang
        lebih efisien dan berkelanjutan.
        <br />
        Di sini terdapat dua Peta SKL yang dibuat sehubungan dengan program kerja TOGA,
        yakni:
      </p>
      <br />
      <h3>Peta Satuan Kemampuan Lahan (SKL) Kemudahan Dikerjakan
      </h3>
      <p>
        Tujuan analisis SKL Kemudahan Dikerjakan adalah untuk mengetahui tingkat
        kemudahan lahan di wilayah atau kawasan untuk digali/dimatangkan dalam proses
        pembangunan/ pengembangan kawasan. Pada peta ini terdapat materi atau bahan
        analisis yang didapat dari BAPEDA Lampung Tengah, di mana terdiri dari Data Jenis
        Tanah, Tingkat Kelerengan, dan topografi atau ketinggian. Dari hasil perhitungan dan
        proses pengklasifikasian didapat peta sebagai berikut:
      </p>
      <br />
      <Image
        src={images.skl1}
        alt="example"
        height={515}
        width={700}
      />
      <br />
      <p>Dari peta dapat ditinjau bahwa daerah Kampung Sri Sawahan didominasi 100%
        oleh Kemampuan Dikerjakan Tinggi (Kelas A) menggambarkan lahan yang
        memungkinkan atau mendukung kegiatan ekonomi atau pertanian dengan relatif baik.
        Faktor-faktor seperti kesuburan tanah, topografi yang tidak terlalu curam, aksesibilitas,
        dan faktor-faktor lain dapat berkontribusi pada kemudahan untuk mengerjakan atau
        memanfaatkan lahan tersebut. Pemahaman ini dapat membantu dalam perencanaan
        penggunaan lahan, pertanian, atau pengembangan wilayah yang lebih efektif</p>
      <br/>
      <h3>Peta Satuan Kemampuan Lahan Ketersediaan Air
      </h3>
      <p>
        Tujuan analisis SKL Ketersediaan Air adalah untuk mengetahui tingkat
        ketersediaan air dan kemampuan penyediaan air pada masingmasing tingkatan, guna
        pengembangan kawasan. Pada peta ini terdapat materi atau bahan analisis yang didapat
        dari BAPEDA Lampung Tengah, di mana terdiri dari Data Curah Hujan, Tingkat
        Kelerengan, dan Morfologi. Dari hasil perhitungan dan proses pengklasifikasian
        didapat peta sebagai berikut:
      </p>
      <br />
      <Image
        src={images.skl2}
        alt="example"
        height={515}
        width={700}
      />
      <br />
      <p>Dari peta dapat ditinjau bahwa daerah Kampung Sri Sawahan didominasi 100%
        oleh Ketersediaan Air Tinggi (Kelas A) berarti wilayah tersebut memiliki kondisi yang
        mendukung ketersediaan air yang cukup. Faktor-faktor seperti drainase yang baik,
        tanah yang mampu menyimpan air, curah hujan yang cukup, dan sumber air permukaan
        yang memadai dapat menyumbang pada tingginya ketersediaan air. Ini dapat
        mengindikasikan potensi baik untuk pertanian, pemukiman, atau keperluan lain yang
        memerlukan pasokan air yang memadai.</p>
    </motion.div>
  );
};

export default about;
