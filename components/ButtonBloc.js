import styles from "../styles/Projects.module.css";

const ButtonBloc = ({ props }) => {
  const { linkURL, githubLink, buttonText } = props;
  return (
    <div className={styles.button_container}>
      <h3>
        <a href={linkURL} target="_blank" rel="noreferrer">
          {buttonText[0]}
        </a>
      </h3>
      <h3>
        <a href={githubLink} target="_blank" rel="noreferrer">
          {buttonText[1]}
        </a>
      </h3>
    </div>
  );
};

export default ButtonBloc;
