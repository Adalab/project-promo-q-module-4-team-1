import '../styles/Preview.scss';

const Preview = (props) => {
  console.log(props);
  return (
    <section className="section__preview">
      <article className="card">
        <button className="resetButton" onClick={props.handleReset}>
          <i className="trashIcon fa-solid fa-trash-can"> </i> Reset
        </button>

        <div className={`card__container palette${props.dataCard.palette} `}>
          <div className="card__container--verticalBorder">
            <h2 className="card__container--name">
              {props.dataCard.name || `Nombre y Apellidos`}
            </h2>
            <p className="card__container--paragraph ">
              {props.dataCard.job || `Front-end developer`}
            </p>
          </div>

          <img
            src={props.dataCard.photo}
            className="card__container--image "
          ></img>
          <nav>
            <ul className="card__container--list">
              <li className="card__containerIcon">
                <a target="blank" href={`tel:${props.dataCard.phone}`}>
                  <i className="card__rrss fa-solid fa-mobile-screen-button "></i>
                </a>
              </li>
              <li className="card__containerIcon">
                <a target="blank" href={`mailto:${props.dataCard.email}`}>
                  <i className="fa-solid fa-envelope card__rrss"></i>
                </a>
              </li>
              <li className="card__containerIcon">
                <a
                  target="blank"
                  href={`https://www.linkedin.com/in/${props.dataCard.linkedin} `}
                >
                  <i className="card__rrss fa-brands fa-linkedin-in "></i>
                </a>
              </li>
              <li className="card__containerIcon">
                <a
                  target="blank"
                  href={`https://github.com/${props.dataCard.github}`}
                >
                  <i className="card__rrss fa-brands fa-github-alt "></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </article>
    </section>
  );
};
export default Preview;
