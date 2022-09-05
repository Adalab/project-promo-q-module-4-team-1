import '../styles/Header.scss';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <Link to="/">
        {' '}
        <img
          className="header__img"
          src={props.logo}
          alt="imagen logo"
          title="logo"
        />
      </Link>
    </header>
  );
};
export default Header;
