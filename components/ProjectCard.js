// import styles from "../styles/Projects.module.css";

const ProjectCard = ({ props }) => {
  // const { objItem, indx } = props;
  const { title, tech, parags, points } = props;
  return (
    <>
      <h3>{title}</h3>
      <p>Tech: {tech}</p>
      {parags.map((content, indx) => (
        <p key={indx}>{content}</p>
      ))}
      <ul>
        {points.map((item, indx) => (
          <li key={indx}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ProjectCard;
