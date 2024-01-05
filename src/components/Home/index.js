import "./index.css";
import Header from "../Header";
import Projects from "../Projects";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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

const Home = () => {
  const [list, setList] = useState(projectData);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState({});

  const onchangeProjectName = (event) => {
    setName(event.target.value);
  };

  const onchangeProjectUrl = (event) => {
    setLink(event.target.value);
  };

  const onchangeProjectDescription = (event) => {
    setDescription(event.target.value);
  };

  const onsubmitForm = (event) => {
    event.preventDefault();
    const newObj = {
      id: uuidv4(),
      heading: name,
      description: description,
      imgUrl:
        "https://res.cloudinary.com/duiooro44/image/upload/v1704379990/Rectangle_7_efcvvb.png",
    };
    setList((prevArray) => [...prevArray, newObj]);
  };

  return (
    <div className="home-container">
      <Header />
      <div className="page-container" id="aboutdetails">
        <div className="description-container">
          <h1 className="portfolio-heading">Hello, my name is Madelyn Torff</h1>
          <p className="portfolio-description">
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </p>
          <div className="project-button-container">
            <a href="#projectdetails" className="hyperlink">
              <button type="button" className="projects-button">
                Projects
              </button>
            </a>
            <button type="button" className="linkedin-button">
              linkedin
            </button>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/duiooro44/image/upload/v1704377730/image_onyeki.png"
            alt="portfolio"
            className="portfolio-image"
          />
        </div>
      </div>
      <div className="add-project">
        <h1 className="add-project-heading">Add Projects</h1>
        <form className="form-container" onSubmit={onsubmitForm}>
          <div className="input-container">
            <label htmlFor="username" className="label">
              Project Name
            </label>
            <input
              type="text"
              className="input"
              id="username"
              onChange={onchangeProjectName}
            />
          </div>
          <div className="input-container">
            <label htmlFor="username" className="label">
              Project Link
            </label>
            <input
              type="text"
              className="input"
              id="username"
              onChange={onchangeProjectUrl}
            />
          </div>
          <div className="input-container">
            <label htmlFor="w3review" className="label">
              Description
            </label>
            <textarea
              className="text-area"
              rows="4"
              cols="50"
              id="w3review"
              onChange={onchangeProjectDescription}
            ></textarea>
          </div>
          <div className="button-container">
            <button type="submit" className="add-button">
              Add
            </button>
          </div>
        </form>
      </div>
      <img
        src="https://res.cloudinary.com/duiooro44/image/upload/v1704378674/Vector_lfsi8p.png"
        alt="footer"
        className="footer"
      />
      <Projects data={list} />
    </div>
  );
};
export default Home;
