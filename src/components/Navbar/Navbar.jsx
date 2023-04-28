import styles from "./Navbar.module.scss";
import Image from "next/image";
import * as image from "../../assets/images";
import $, { css } from "jquery";
import { useState } from "react";

const Navbar = () => {
  const [numberColor, setNUmberColor] = useState(1);
  const [color, setColor] = useState(1);

  const tabsArray = [
    { title: "Cursos" },
    { title: "Quiénes somos" },
    { title: "Noticias frescas" },
    { title: "#Wheredoers" },
    { title: "Contacto" },
  ];

  const changeHome = () => {
    setNUmberColor(numberColor + 1);
    setColor(!color);
    numberColor === 3 && setNUmberColor(0);
    const colors = ["#010001", "#E9E6E1", "#E6511B", "#E1DF3C"];
    const backgroundHome = $("#home");
    const backgroundnavbar = $("#navbar");
    backgroundHome.css("background-color", `${colors[numberColor]}`);
    backgroundnavbar.css("background-color", `${colors[numberColor]}`);
    $("#Trazado_11935").css("fill", `${color ? "black" : "white"}`);
    $("#Trazado_11936").css("fill", `${color ? "black" : "white"}`);
  };
  return (
    <div id="navbar" className={styles.container}>
      <svg
        onClick={changeHome}
        xmlns="http://www.w3.org/2000/svg"
        width="23.736"
        height="20.525"
        viewBox="0 0 23.736 20.525"
        transform="rotate(90)"
      >
        <g
          id="Grupo_12068"
          data-name="Grupo 12068"
          transform="translate(-1400.264 -1340.948)"
        >
          <path
            id="Trazado_11935"
            data-name="Trazado 11935"
            d="M9.48,1.192H.6a.074.074,0,0,0-.074.074v.269a.073.073,0,0,0,.057.072l2.453.56V23.953l-2.453.56a.073.073,0,0,0-.057.072v.27a.073.073,0,0,0,.074.074H9.48a.074.074,0,0,0,.074-.074V1.266A.074.074,0,0,0,9.48,1.192Z"
            transform="translate(1399.072 1362) rotate(-90)"
            fill="#e9e6e1"
          />
          <path
            id="Trazado_11936"
            data-name="Trazado 11936"
            d="M25.482,12.453c4.7-.43,6.431-3.508,6.431-5.56v-.1c0-3.506-2.762-5.6-7.388-5.6H22.742a.074.074,0,0,0-.074.074v.269a.074.074,0,0,0,.074.074h.583c1.679,0,2.364,1.521,2.364,5.251v.269c0,3.9-.521,5.149-2.146,5.149h-.8a.074.074,0,0,0-.074.074v.269a.074.074,0,0,0,.074.074h.728a1.9,1.9,0,0,1,1.9,1.126,11.046,11.046,0,0,1,.647,4.6v.809c0,4.928-.88,5.284-2.328,5.284h-.91a.074.074,0,0,0-.074.074v.27a.074.074,0,0,0,.074.074h1.965c2.777,0,4.919-.711,6.365-2.114a5.742,5.742,0,0,0,1.751-4.093v-.2C32.859,15.764,30.328,12.872,25.482,12.453Z"
            transform="translate(1399.072 1373.807) rotate(-90)"
            fill="#e9e6e1"
          />
        </g>
      </svg>
      {/*       <Image
        src={image.iso}
        className={styles.buttonB}
        alt="No image"
        width={30}
        height={30}
        style={{ transform: "rotate(90deg" }}
        onClick={changeHome}
      /> */}
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
            style={{
              transform: "rotate(90deg",
              fill: "black",
              stroke: "black",
            }}
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
