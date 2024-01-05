import "./index.css";

const Projects = (props) => {
  const { projectDetails } = props;
  const { heading, details, imgUrl } = projectDetails;

  return (
    <li className="list-items">
      <div className="heading-container">
        <h1 className="project-heading">{heading}</h1>
        <p className="project-description">{details}</p>
        <button type="button" className="view-project-button">
          View project
        </button>
      </div>
      <img src={imgUrl} alt="project-avatar" className="project-name" />
    </li>
  );
};
export default Projects;
