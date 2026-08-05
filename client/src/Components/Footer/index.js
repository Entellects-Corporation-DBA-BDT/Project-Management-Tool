const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__brand">◆ FlowSpace</div>
      <p className="footer__tagline">
        Any technology. Any platform. Anywhere in the world. One workspace.
      </p>
      <p className="footer__copy">© {new Date().getFullYear()} FlowSpace. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
