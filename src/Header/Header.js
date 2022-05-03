import "./Header.scss";
import Logo from "../deliveroo-logo.svg";

const Header = () => {
  return (
    <header className="Background--white">
      <div className="Header container">
        <img src={Logo} alt="Logo Deliveroo" />
      </div>
    </header>
  );
};

export default Header;
