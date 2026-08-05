const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <span className="navbar__logo">◆</span> FlowSpace
      </div>
      <nav className="navbar__links">
        <a href="#tools">Tools</a>
        <a href="#workspace">Workspace</a>
        <a href="#tasks">Task Management</a>
        <a href="#gantt">Gantt Chart</a>
      </nav>
      <button className="navbar__cta">Set Up Your Workspace</button>
    </header>
  );
};

export default Navbar;
