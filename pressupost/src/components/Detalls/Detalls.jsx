import { useState, useRef, useEffect } from "react";
import { Detalls as StyledDetalls } from "./Detalls.styles";

function Detalls() {
  // Estat dels detalls (pàgines i idiomes)
  const [detalls, setDetalls] = useState(() => {
    const localSaved = localStorage.getItem("detalls");
    const valorInicial = JSON.parse(localSaved);
    return {
      pagines: valorInicial.pagines || 1,
      idiomes: valorInicial.idiomes || 1,
    };
  });

  // Introducció amb teclat de valors a l'input
  const handleDetailsChange = (event) => {
    if (event.target.value.match("^[0-9]+$")) {
      setDetalls({
        ...detalls,
        [event.target.name]: parseInt(event.target.value),
      });
    }
  };

  // Botons d'increment i de decrement de les pàgines i idiomes
  const inputPagines = useRef(null);
  const inputIdiomes = useRef(null);

  const increasePags = () => {
    setDetalls({
      ...detalls,
      pagines: ++detalls.pagines,
    });
    inputPagines.current.value = detalls.pagines;
  };

  const decreasePags = () => {
    if (detalls.pagines > 0) {
      setDetalls({
        ...detalls,
        pagines: --detalls.pagines,
      });
    }
    inputPagines.current.value = detalls.pagines;
  };

  const increaseLang = () => {
    setDetalls({
      ...detalls,
      idiomes: ++detalls.idiomes,
    });
    inputIdiomes.current.value = detalls.idiomes;
  };

  const decreaseLang = () => {
    if (detalls.idiomes > 0) {
      setDetalls({
        ...detalls,
        idiomes: --detalls.idiomes,
      });
    }
    inputIdiomes.current.value = detalls.idiomes;
  };

  // Guardar al LocalStorage
  useEffect(() => {
    try {
      window.localStorage.setItem("detalls", JSON.stringify(detalls));
    } catch (error) {
      console.log(error);
    }
  }, [detalls]);

  return {
    detalls,
    render: (
      <StyledDetalls>
        <div className="wrapperDetalls">
          <label for="pagines">Pàgines: </label>
          <div>
            <button onClick={increasePags} className="buttonDetalls">
              +
            </button>
            <input
              type="text"
              inputMode="numeric"
              name="pagines"
              onInput={handleDetailsChange}
              placeholder={detalls.pagines}
              className="inputDetalls"
              ref={inputPagines}
            />
            <button onClick={decreasePags} className="buttonDetalls">
              -
            </button>
          </div>
        </div>
        <div className="wrapperDetalls">
          <label for="idiomes">Idiomes: </label>
          <div>
            <button onClick={increaseLang} className="buttonDetalls">
              +
            </button>
            <input
              type="text"
              inputMode="numeric"
              name="idiomes"
              onInput={handleDetailsChange}
              placeholder={detalls.idiomes}
              className="inputDetalls"
              ref={inputIdiomes}
            />
            <button onClick={decreaseLang} className="buttonDetalls">
              -
            </button>
          </div>
        </div>
      </StyledDetalls>
    ),
  };
}

export default Detalls;