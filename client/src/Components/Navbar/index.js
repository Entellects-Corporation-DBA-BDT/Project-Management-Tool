import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <Link to="/" className="navbar__brand">
        <span className="navbar__logo">◆</span> TeamFlow Manager
      </Link>
      <nav className="navbar__links">
        <a href="#tools">Product</a>
        <a href="#workspace">Workspace</a>
        <a href="#tasks">Execution</a>
        <a href="#gantt">Timeline</a>
      </nav>
      <Link to="/login" className="navbar__cta">
        Open workspace
      </Link>
    </header>
  );
};

export default Navbar;
