import Image from "next/image";
import styles from "./Footer.module.scss";
import * as image from "../../assets/images";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subBarra}>
        <span>Cursos</span>
        <span>Quiénes somos</span>
        <span>Noticias frescas</span>
        <span>#Wearedoers</span>
        <span>Contacto</span>
      </div>
      <div className={styles.downBarra}>
        <div className={styles.item}>
          <div className={styles.icons}>
            <Image
              src={image.email}
              alt="No image"
              style={{ transform: "rotate(90deg" }}
              width={40}
              height={40}
            />
            <Image
              src={image.instagram}
              alt="No image"
              width={40}
              height={40}
            />
            <Image src={image.globe} alt="No image" width={40} height={40} />
          </div>
          <span>2021 Brother Madrid</span>
        </div>
        <div className={styles.item}>
          <Image src={image.whiteLogo} alt="No image" />
        </div>
        <div className={styles.item}>
          <span>
            Calle Gran Via 27,28013 Madrid, +34 910 52 66 49 | +34 612 27 84 09
            madrid@brotherad.com
          </span>
          <span>Made by 20DEDOS</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
