import Image from "next/image";
import ButtonBloc from "./ButtonBloc";
import styles from "../styles/Projects.module.css";

const PersoCard = ({ props }) => {
  const { title, tech, parags, imageRef, linkURL, githubLink, buttonText } =
    props;
  return (
    <div className={styles.card_container}>
      <div className={styles.perso_card_header}>
        <Image src={imageRef} alt="project image" width={500} height={320} />
        <h3>{title}</h3>
        <p>{tech}</p>
        <ButtonBloc props={{ linkURL, githubLink, buttonText }} />
      </div>
      <div className={styles.perso_card_text}>
        {parags.map((content, indx) => (
          <p className={styles.card_text} key={indx}>
            {content}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PersoCard;
