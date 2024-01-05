import "./index.css";

const Header = () => (
  <nav className="header-container">
    <p className="nav-heading">Madelyn Torff</p>
    <ul className="header-item-container">
      <li className="nav-description">
        <a href="#aboutdetails" className="hyperlink">
          About
        </a>
      </li>
      <li className="nav-description">
        <a href="#projectdetails" className="hyperlink">
          Projects
        </a>
      </li>
      <li className="nav-description">
        <a href="#contactdetails" className="hyperlink">
          Contacts
        </a>
      </li>
    </ul>
  </nav>
);
export default Header;
