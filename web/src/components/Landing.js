import '../styles/layout/Landing.scss';
import { Link } from 'react-router-dom';
import image from '../images/logo-git-brunch.png';

const Landing = () => {
  return (
    <main className="main">
      <div className="main__colcen">
        <section className="main__section">
          <img
            className="main__section--img"
            src={image}
            alt="imagen logo"
            title="logo"
          />
        </section>

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

        <section className="main__section main__last">
          <div className="main__link--div">
            <Link className="main__link--link" to="/card">
              Comenzar
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};
export default Landing;
