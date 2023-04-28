import styles from "./Chat.module.scss";
import Image from "next/image";
import * as image from "../../assets/images";

const Chat = () => {
  return (
    <div className={styles.container}>
      <Image src={image.chat} alt="No image" />
      Hola, Bro {":)"}
    </div>
  );
};

export default Chat;
