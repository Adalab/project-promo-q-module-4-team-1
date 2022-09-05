import { useState } from 'react';
import '../styles/Share.scss';

const Share = (props) => {
  let arrow = props.isCollapsed === 3 ? ('arrow-translate') : ('');
  const [showResult, setShowResult] = useState(false)

  const handleCreatedCard = (event) => {
    event.preventDefault();
    props.handleCreatedCard()
    setShowResult(true)
  };


  const handleClickRender = () => {
    if (props.isCollapsed === 3) {
      setShowResult(false)
    }
    props.setIsCollapsed(props.isCollapsed === 3 ? 0 : 3)
  };

  const htmlCollapse = () => {
    if (props.isCollapsed === 3) {
      return (
        <div className="buttondiv" >
          <button onClick={handleCreatedCard}
            className="buttondiv-share ">
            <i className="share-card fa-solid fa-address-card"></i> Crear
            tarjeta
          </button>
        </div >)
    }
  }



  return (
    <fieldset>
      <div className="share">
        <legend className="share__title " onClick={handleClickRender}>
          <i className="fa-solid fa-share-nodes share-icon "></i>
          <span className="fill__title--text ">Comparte</span>
          <i className={`share-arrow fa-solid fa-angle-up ${arrow}`} ></i>
        </legend>

      </div>
      {htmlCollapse()}

      {
        showResult && (
          <div className="buttontwitter ">
            <h6 className="buttontwitter-h6 ">
              {props.resultCard.success === true
                ? 'La tarjeta ha sido creada:'
                : '¡Rellena todo el formulario!'}
            </h6>
            <a
              target="_blank"
              href={props.resultCard.cardURL}
              className="buttontwitter-paragraph "
            >
              {props.resultCard.cardURL}
            </a>

            <a
              target="_blank"
              href={`https://twitter.com/intent/tweet?text=Hello%20world%20my%20card&url=${props.resultCard.cardURL}`}
              className=" buttontwitter-button"
            >
              <i className="fa-brands fa-twitter share-in-twitter"></i> Compartir
              en Twitter
            </a>
          </div>
        )
      }
    </fieldset>
  );
};
export default Share;
