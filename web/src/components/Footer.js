import '../styles/Footer.scss';
import logoFooter from '../images/logo-adalab.png';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-title">Git Brunch &#169;2022</p>
      <img
        src={logoFooter}
        alt="logo Adalab"
        title="logo Adalab"
        className="adalab-img"
      />
    </footer>
  );
};
export default Footer;
