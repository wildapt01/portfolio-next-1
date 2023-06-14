import styles from "../styles/Projects.module.css";

const ButtonBloc = ({ props }) => {
  const { linkURL, githubLink, buttonText } = props;
  return (
    <div className={styles.button_container}>
      <div>
        <a href={linkURL} target="_blank" rel="noreferrer">
          {buttonText[0]}
        </a>
      </div>
      <div>
        <a href={githubLink} target="_blank" rel="noreferrer">
          {buttonText[1]}
        </a>
      </div>
    </div>
  );
};

export default ButtonBloc;
