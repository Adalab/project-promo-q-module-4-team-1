import '../styles/Design.scss';
const Design = (props) => {
  const handleInput = (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    props.handleInput({ value: inputValue, name: inputName });
  };
  let arrow = props.isCollapsed === 1 ? ('arrow-translate') : ('');
  const handleClickRender = () => {


    props.setIsCollapsed(props.isCollapsed === 1 ? 0 : 1)


  }


  const htmlCollapse = () => {
    if (props.isCollapsed === 1) {
      return (<section className="design-form ">
        <legend className="color">Colores</legend>
        <div className="election">
          <label className="options" htmlFor="colors1">
            <input
              className="design-radio"
              id="colors1"
              type="radio"
              value="1"
              name="palette"
              checked={props.dataCard.palette === '1'}
              onChange={handleInput}
            />
            <div className="palette-rectangle">
              <div className="rectangle color1"></div>
              <div className="rectangle color2"></div>
              <div className="rectangle color3"></div>
            </div>
          </label>

          <label className="options" htmlFor="colors2">
            <input
              className="design-radio"
              id="colors2"
              type="radio"
              value="2"
              name="palette"
              checked={props.dataCard.palette === '2'}
              onChange={handleInput}
            />
            <div className="palette-rectangle">
              <div className="rectangle color4"></div>
              <div className="rectangle color5"></div>
              <div className="rectangle color6"></div>
            </div>
          </label>

          <label className="options" htmlFor="colors3">
            <input
              className="design-radio"
              id="colors3"
              type="radio"
              value="3"
              name="palette"
              checked={props.dataCard.palette === '3'}
              onChange={handleInput}
            />
            <div className="palette-rectangle">
              <div className="rectangle color7"></div>
              <div className="rectangle color8"></div>
              <div className="rectangle color9"></div>
            </div>
          </label>
        </div>
      </section>)
    }
    ;
  }



  return (
    <fieldset>
      <section className="fill" onClick={handleClickRender}>
        <legend className="fill__title ">
          <i className="fa-solid fa-object-ungroup design-icon"></i>
          <span className="fill__title--text ">Diseña</span>
          <i className={`fa-solid fa-angle-up ${arrow} `}></i>
        </legend>
      </section>
      {htmlCollapse()}
    </fieldset>
  );
};
export default Design;
