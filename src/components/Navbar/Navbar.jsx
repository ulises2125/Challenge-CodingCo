import styles from "./Navbar.module.scss";
import Image from "next/image";
import * as image from "../../assets/images";

const Navbar = () => {
  const tabsArray = [
    { title: "Cursos" },
    { title: "Quiénes somos" },
    { title: "Noticias frescas" },
    { title: "#Wheredoers" },
    { title: "Contacto" },
  ];
  return (
    <div className={styles.container}>
      <Image
        src={image.iso}
        alt="No image"
        width={30}
        height={30}
        style={{ transform: "rotate(90deg" }}
      />
      {/* <Image src={image.logo} alt="No image" width={100} height={100} /> */}
      <div className={styles.tabs}>
        {tabsArray.map((el) => {
          return <a>{el.title}</a>;
        })}
        <div className={styles.icons}>
          <Image
            src={image.email}
            alt="No image"
            width={30}
            height={30}
            style={{ transform: "rotate(90deg" }}
          />
          <Image
            src={image.instagram}
            alt="No image"
            width={30}
            height={30}
            style={{ transform: "rotate(90deg" }}
          />
          <Image
            src={image.globe}
            alt="No image"
            width={30}
            height={30}
            style={{ transform: "rotate(90deg" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
