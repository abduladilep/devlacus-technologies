import "./Header.css";
import logo2 from "../assets/logo2.png";

function Header() {
  return (
    
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo2} alt="" />
      </div>
      <ul className="nav-menu">
        <li>Home </li>
        <li>About us</li>
        <li>
          Faq <hr />
        </li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Header;
