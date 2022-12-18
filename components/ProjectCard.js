import Image from "next/image";
import styles from "../styles/Projects.module.css";
import { AltDivider } from "./Divider.js";

const ProjectCard = ({ props }) => {
  // const { objItem, indx } = props;
  const { title, tech, parags, points, imageRef } = props;
  const pointsLeft = points.slice(0, 4);
  const pointsRight = points.slice(4);
  return (
    <>
      <div className={styles.card_title}>
        <AltDivider />
        <h3>{title}</h3>
      </div>
      <div>
        <div className={styles.card_header}>
          <Image src={imageRef} alt="project image" width={400} height={250} />
          <p>{tech}</p>
        </div>

        {parags.map((content, indx) => (
          <p className={styles.card_text} key={indx}>
            {content}
          </p>
        ))}
        <div className={styles.card_list}>
          <ul className={styles.card_ul}>
            {pointsLeft.map((item, indx) => (
              <li key={indx}>{item}</li>
            ))}
          </ul>
          <ul className={styles.card_ul}>
            {pointsRight.map((item, indx) => (
              <li key={indx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
