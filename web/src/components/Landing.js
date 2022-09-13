import '../styles/layout/Landing.scss';
import { Link } from 'react-router-dom';
import image from '../images/logo-git-brunch.png';

const Landing = () => {
  return (
    <main className="main">
      <img
        className="main__section--img"
        src={image}
        alt="imagen logo"
        title="logo"
      />

      <section className="main__section">
        <h1 className="main__section--title">Crea tu tarjeta de visita</h1>
        <p className="main__section--paragraph">
          Crea mejores contactos profesionales de forma fácil y cómoda
        </p>
      </section>

      <section className="main__section--wrapper">
        <div className="main__icon">
          <i className="fa-solid fa-object-ungroup icon-index-main"></i>
          <p className="main__icon--paragraph">Diseña</p>
        </div>

        <div className="main__icon">
          <i className="fa-solid fa-keyboard icon-index-main"></i>
          <p className="main__icon--paragraph">Rellena</p>
        </div>

        <div className="main__icon">
          <i className="fa-solid fa-share-nodes icon-index-main"></i>
          <p className="main__icon--paragraph">Comparte</p>
        </div>
      </section>

      <Link className="main__link" to="/card">
        Comenzar
      </Link>
    </main>
  );
};
export default Landing;
