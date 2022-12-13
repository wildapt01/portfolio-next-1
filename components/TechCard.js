import styles from "../styles/TechStack.module.css";
import { VscListUnordered } from "react-icons/vsc";

const TechCard = ({ props }) => {
  const { title, items } = props;
  return (
    <div>
      <section className={styles.card_title}>
        <VscListUnordered />
        <div>{title}</div>
      </section>
      <section>
        {items.map((line, indx) => (
          <div className={styles.list_item} key={indx}>
            {line}
          </div>
        ))}
      </section>
    </div>
  );
};

export default TechCard;
