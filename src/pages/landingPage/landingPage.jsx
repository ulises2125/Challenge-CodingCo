import Footer from "@/something/components/Footer/Footer";
import Navbar from "@/something/components/Navbar/Navbar";
import Chat from "@/something/components/Chat/Chat";
import styles from "./LandingPage.module.scss";
import Image from "next/image";
import * as image from "../../assets/images";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

const LandingPage = () => {
  const aux = (str, arrow, icon) => (
    <>
      <Image src={arrow} alt="No image" />
      <Image src={icon} alt="No image" />
      <h1>{str}</h1>
    </>
  );

  return (
    <div>
      <Navbar />
      <div id="home" className={styles.containerHead}>
        <div className={styles.item1}>
          <div className={styles.div1}>
            <Image
              src={image.magnetaAsterisk}
              alt="No image"
              width={70}
              height={70}
              style={{ transform: "rotate(90deg" }}
            />
            <div>
              <Image
                src={image.yellowHex}
                alt="No image"
                width={220}
                height={220}
                style={{ transform: "rotate(72deg" }}
              />
              <Image
                src={image.whiteArrow}
                alt="No image"
                width={50}
                height={50}
                style={{ transform: "rotate(-135deg" }}
              />
            </div>
          </div>
        </div>
        <div className={styles.item2}>
          <div className={styles.div2}>
            <Image
              src={image.minus}
              alt="No image"
              width={70}
              height={70}
              style={{ transform: "rotate(0deg" }}
            />
            <Image
              src={image.logo}
              alt="No image"
              width={400}
              style={{ transform: "rotate(0deg" }}
            />
            <div style={{ marginTop: "8.5rem", marginLeft: "5rem" }}>
              <Image
                src={image.blueAsterisk}
                alt="No image"
                width={50}
                height={50}
                style={{ transform: "rotate(0deg" }}
              />
            </div>
          </div>
        </div>
        <div className={styles.item3}>
          <div className={styles.div3}>
            <div
              style={{
                display: "flex",
                paddingLeft: "10rem",
                marginTop: "3rem",
                gap: "24rem",
              }}
            >
              <Image
                src={image.yellowHex}
                alt="No image"
                width={200}
                height={200}
                style={{ transform: "rotate(0deg" }}
              />
              <Image
                src={image.whiteArrow2}
                alt="No image"
                width={100}
                height={100}
                style={{ transform: "rotate(0deg" }}
              />
            </div>

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
              <span>// Ver todos los cursos // ver</span>
            </div>
          </div>{" "}
        </div>
        <div className={styles.item4}>
          <div className={styles.div4}>
            <Image
              src={image.hexBlue}
              alt="No image"
              width={70}
              style={{ transform: "rotate(0deg" }}
            />
            <Image
              src={image.greenTrap}
              alt="No image"
              width={150}
              style={{ transform: "rotate(0deg" }}
            />
          </div>
        </div>
        <div className={styles.item5}>
          <div className={styles.div5}>
            <Image
              src={image.magnetaCircle}
              alt="No image"
              width={40}
              height={40}
            />
            <Image
              src={image.whiteArrowDown}
              alt="No image"
              width={70}
              height={70}
            />
            <div></div>
            <div className={styles.chat}>
              <Chat />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.containerMidHight}>
        <div className={styles.box1}>
          <div className={styles.backgroundYellow}>
            <h1>Mucho más que una escuela de creativos</h1>
            <br />
            <p>
              Un Brother es alguien que
              <span> piensa continuamente, </span>
              inquiero,
              <span> curioso</span> y reflexivo.
            </p>
            <br />
            <p>
              Que se
              <span> plantea preguntas</span> y busca las respuestas. Un Brother
              es alguien que se abre camino, proactivo, que tiene iniciativas,
              que
              <span> busca oportunidades.</span>
            </p>
            <br />
            <p>
              Un brother no deja que las cosas pasen, va a buscarlas y las pelea
              y que si gana, sigue a por mas.
            </p>
            <br />
            <p>
              Y si pierde,
              <span> no se rinde jamás.</span>
            </p>
          </div>
        </div>

        <div className={styles.backgroundCursos}>
          <h1>Cursos y Workshops</h1>
          <br />
          <div className={styles.box2}>
            <div>
              <Image
                src={image.thumb02}
                alt="No image"
                width={200}
                height={200}
              />
              <p>Curso Anual de Creatividad</p>
            </div>
            <div>
              <Image
                src={image.thumb03}
                alt="No image"
                width={200}
                height={200}
              />
              <p>Planificación y Estrategia Creativa 2021</p>
            </div>
            <div>
              <Image
                src={image.thumb01}
                alt="No image"
                width={200}
                height={200}
              />
              <p>PR & Comunicación 2021</p>
            </div>
            <div className={styles.iconsArrow}>
              <BsArrowUpCircle fontSize={50} />
              <BsArrowDownCircle fontSize={50} />
            </div>
            <div>
              <Image
                src={image.thumb05}
                alt="No image"
                width={200}
                height={200}
              />
              <p>Digital y Social Media</p>
            </div>
            <div>
              <Image
                src={image.thumb06}
                alt="No image"
                width={200}
                height={200}
              />
              <p>Design Thinking</p>
            </div>
            <div>
              <Image
                src={image.thumb04}
                alt="No image"
                width={200}
                height={200}
              />
              <p>Planificación y Estrategia Creativa</p>
            </div>
            <div className={styles.magenta}>
              <Image src={image.magnetaAsterisk} alt="No image" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.coursesBar}>
        {aux("Chequea todos los cursos", image.yellowArrows, image.yellowBear)}
        {aux("Chequea todos los cursos", image.yellowArrows, image.yellowBear)}
        {aux("Chequea todos los cursos", image.yellowArrows, image.yellowBear)}
      </div>
      <div className={styles.containerMidLow}>
        <div>
          <h1>Noticias Frescas</h1>
        </div>
        <div className={styles.boxImages}>
          <div className={styles.boxImage}>
            <Image src={image.news01} alt="No imabe" width={250} height={400} />
            <p>Chin chin por nuestra plata en el #hackforgood del cdec</p>
            <span>
              Publicado: 04/04/2020 . Leer más{" "}
              <Image
                src={image.whiteArrowDown}
                alt="No image"
                width={20}
                height={20}
                style={{ transform: "rotate(-90deg" }}
              />
            </span>
          </div>
          <div className={styles.boxImage}>
            <Image src={image.news02} alt="No imabe" width={250} height={200} />
            <p>
              Dos alumnas de Brother crean la primera manifestacion feminista en
              Twitch
            </p>
            <span>
              Publicado: 04/04/2020 . Leer más{" "}
              <Image
                src={image.whiteArrowDown}
                alt="No image"
                height={30}
                style={{ transform: "rotate(-90deg" }}
              />
            </span>
          </div>
          <div className={styles.boxImage}>
            <Image src={image.news03} alt="No imabe" width={250} height={400} />
            <p>
              Brother Presenta {"<"}Pinta y Colorea {">"} : el ciclo con el
              mejor talento gráfico de Madrid
            </p>
            <span>
              Publicado: 04/04/2020 . Leer más{" "}
              <Image
                src={image.whiteArrowDown}
                alt="No image"
                height={30}
                style={{ transform: "rotate(-90deg" }}
              />
            </span>
          </div>
          <div className={styles.boxImage}>
            <Image src={image.news04} alt="No imabe" width={250} height={250} />
            <p>
              Las nuevas ideas llegan a correos gracias a los alumnos de Brother
            </p>
            <span>
              Publicado: 04/04/2020 . Leer más{" "}
              <Image
                src={image.whiteArrowDown}
                alt="No image"
                height={30}
                style={{ transform: "rotate(-90deg" }}
              />
            </span>
          </div>
          <div className={styles.boxImage}>
            <Image src={image.news06} alt="No imabe" width={250} height={200} />
            <p>Chin chin por nuestra plata en el #hackforgood del cdec </p>
            <span>
              Publicado: 04/04/2020 . Leer más{" "}
              <Image
                src={image.whiteArrowDown}
                alt="No image"
                height={30}
                style={{ transform: "rotate(-90deg" }}
              />
            </span>
          </div>
          <div className={styles.boxImage}>
            <Image src={image.news05} alt="No imabe" width={250} height={400} />
            <p>
              #PROHIBIDOFIJARCARTELES: UNA NUEVA OPORTUNIDAD PARA EL CARTEL MÁS
              FEO DEL MUNDO
            </p>
            <span>
              Publicado: 04/04/2020 . Leer más{" "}
              <Image
                src={image.whiteArrowDown}
                alt="No image"
                height={30}
                style={{ transform: "rotate(-90deg" }}
              />
              <span>
                Publicado: 04/04/2020 . Leer más{" "}
                <Image
                  src={image.whiteArrowDown}
                  alt="No image"
                  height={30}
                  style={{ transform: "rotate(-90deg" }}
                />
              </span>
            </span>
          </div>
          <div className={styles.boxImage}>
            <Image src={image.news07} alt="No imabe" width={250} height={150} />
            <p>
              Somos la escuela con más finalistas en el festival CDEC (otra vez
              ;) {")"}
            </p>
            <span>
              Publicado: 04/04/2020 . Leer más{" "}
              <Image
                src={image.whiteArrowDown}
                alt="No image"
                height={30}
                style={{ transform: "rotate(-90deg" }}
              />
            </span>
          </div>
          <div className={styles.boxImage}>
            <Image src={image.news08} alt="No imabe" width={250} height={400} />
            <p>
              Nueva presentación del kingdom a cargo del ilustrador asis
              percales
            </p>
            <span>
              Publicado: 04/04/2020 . Leer más{" "}
              <Image
                src={image.whiteArrowDown}
                alt="No image"
                height={30}
                style={{ transform: "rotate(-90deg" }}
              />
            </span>
          </div>
          <Image
            src={image.magnetaCircle2}
            alt="No image"
            width={50}
            heigth={50}
          />
        </div>
        <div
          style={{ backgroundColor: "#fe1f56", color: "#fff" }}
          className={styles.coursesBar}
        >
          {aux(
            "Revisá todas las noticias",
            image.whiteArrows,
            image.whiteSmile
          )}
          {aux(
            "Revisá todas las noticias",
            image.whiteArrows,
            image.whiteSmile
          )}
          {aux(
            "Revisá todas las noticias",
            image.whiteArrows,
            image.whiteSmile
          )}
        </div>
      </div>
      <div className={styles.containerDown}>
        <div className={styles.fontGrey}>
          <h1>#Sosloquehacés</h1>
          <Image src={image.bearMisc} alt="No image" />
        </div>
        <div className={styles.form}>
          <h3>¿Quieres saber más sobre nuestros cursos?</h3>
          <p>Completá este formulario</p>
          <span>Nombre*</span>
          <input disabled name="nombre" placeholder="Escribe tu nombre" />
          <span>Teléfono*</span>
          <input disabled name="telefono" value="612 27 84 09" />
          <span>E-mail*</span>
          <input
            disabled
            name="email"
            placeholder="Escribe tu correo electrónico"
          />
          <span>Curso de interés</span>
          <div className={styles.caja}>
            <select disabled>
              <option>Seleccioná un curso</option>
            </select>
          </div>
          <span>Mensaje</span>
          <input
            disabled
            name="mensaje"
            placeholder="Escribe un mensaje adicional"
          />
          *datos obligatorios
          <button>
            <span>Enviar</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
