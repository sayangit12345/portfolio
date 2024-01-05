import "./index.css";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const projectData = [
  {
    id: 1,
    heading: "Project Name",
    details:
      "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
    imgUrl:
      "https://res.cloudinary.com/duiooro44/image/upload/v1704379715/pexels-elly-fairytale-3823207_1_a9w6sq.png",
  },
  {
    id: 2,
    heading: "Project Name",
    details:
      "What was your role, your deliverables, if the project was personal, freelancing.",
    imgUrl:
      "https://res.cloudinary.com/duiooro44/image/upload/v1704379677/Rectangle_7_1_ywirre.png",
  },
  {
    id: 3,
    heading: "Project Name",
    details:
      "You can also add in this description the type of the project, if it was for web, mobile, electron.",
    imgUrl:
      "https://res.cloudinary.com/duiooro44/image/upload/v1704379990/Rectangle_7_efcvvb.png",
  },
];

const Projects = (props) => {
  const data = props;

  return (
    <div className="projects-container" id="projectdetails">
      <h1 className="project-title">Projects</h1>
      <ul className="project-details-section">
        {projectData.map((eachData) => (
          <li key={eachData.id} className="list-items">
            <div className="heading-container">
              <h1 className="project-heading">{eachData.heading}</h1>
              <p className="project-description">{eachData.details}</p>
              <button type="button" className="view-project-button">
                View project
              </button>
            </div>
            <img
              src={eachData.imgUrl}
              alt="project-avatar"
              className="project-name"
            />
          </li>
        ))}
      </ul>
      <div className="contacts-container" id="contactdetails">
        <div className="contact">
          <RiInstagramFill className="icon" />
          <FaLinkedin className="icon" />
          <IoIosMail className="icon" />
        </div>
        <p className="project-description">
          Copyright © 2024. All rights reserved
        </p>
      </div>
      <img
        src="https://res.cloudinary.com/duiooro44/image/upload/v1704378674/Vector_lfsi8p.png"
        alt="footer"
        className="footer"
      />
    </div>
  );
};
export default Projects;
