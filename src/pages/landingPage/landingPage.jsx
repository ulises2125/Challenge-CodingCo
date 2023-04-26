import Footer from "@/something/components/Footer/Footer";
import Navbar from "@/something/components/Navbar/Navbar";
import styles from "./LandingPage.module.scss";
import Image from "next/image";
import * as image from "../../assets/images";

const LandingPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.container}>
        <div className={styles.item}>
          <Image
            src={image.magnetaAsterisk}
            alt="No image"
            width={70}
            height={70}
          />
        </div>
        <div className={styles.item}>2</div>
        <div className={styles.item}>
          <Image
            src={image.yellowHex}
            alt="No image"
            width={220}
            height={220}
            style={{ transform: "rotate(42deg" }}
          />
          <Image
            src={image.whiteArrow}
            alt="No image"
            width={50}
            height={50}
            style={{ transform: "rotate(-135deg" }}
          />
        </div>
        <div className={styles.item}>
          <Image
            src={image.yellowHex}
            alt="No image"
            width={170}
            height={170}
          />
        </div>
        <div className={styles.item}>
          <Image src={image.minus} alt="No image" width={70} height={70} />
          <Image src={image.logo} alt="No image" width={400} height={400} />
          <Image
            src={image.blueAsterisk}
            alt="No image"
            width={50}
            height={50}
          />
          <div>
            <Image
              src={image.whiteArrow2}
              alt="No image"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className={styles.item}>
          <Image src={image.dots} alt="No image" width={4} />
          <div className={styles.boxText}>
            <div className={styles.boxColor}>
              <h1>Curso Anual de Creatividad</h1>
              <span>Hay plazas disponibles.</span>
              <span>Apúntate!</span>
            </div>
            <div className={styles.boxColor}>
              <h1>Planificación y Estrategia Creativa</h1>
              <span>Quedan pocas plazas.</span>
              <span>No te quedes fuera!</span>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <Image
            src={image.magnetaCircle}
            alt="No image"
            width={40}
            height={40}
          />
        </div>
        <div className={styles.item}>
          <Image
            src={image.whiteArrowDown}
            alt="No image"
            width={70}
            height={70}
          />
        </div>
        <div className={styles.item}>
          <Image
            src={image.greenTrap}
            alt="No image"
            width={170}
            height={170}
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
