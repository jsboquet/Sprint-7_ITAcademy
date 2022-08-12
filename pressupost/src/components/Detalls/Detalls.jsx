import { useState, useRef } from 'react';
import { Detalls as StyledDetalls } from './Detalls.styles';

function Detalls() {
    const [detalls, setDetalls] = useState({
      pagines: 1,
      idiomes: 1,
    })

    const inputPagines = useRef(null);
    const inputIdiomes = useRef(null);
    
    const handleDetailsChange = (event) => {
      if (event.target.value.match("^[0-9]+$")) {
        setDetalls({
          ...detalls,
          [event.target.name]: parseInt(event.target.value),
        });
      }
    }
  
    // Botons d'increment i de decrement de les pàgines i idiomes
    const increasePags = () => {
      setDetalls({
        ...detalls,
        pagines: ++detalls.pagines,
      });
      inputPagines.current.value = detalls.pagines;
    }
  
    const decreasePags = () => {
      if (detalls.pagines > 0) {
        setDetalls({
          ...detalls,
          pagines: --detalls.pagines,
        });
        inputPagines.current.value = detalls.pagines;
      }
    }
  
    const increaseLang = () => {
      setDetalls({
        ...detalls,
        idiomes: ++detalls.idiomes,
      });
      inputIdiomes.current.value = detalls.idiomes;
    }
  
    const decreaseLang = () => {
      if (detalls.idiomes > 0) {
        setDetalls({
          ...detalls,
          idiomes: --detalls.idiomes,
        });
        inputIdiomes.current.value = detalls.idiomes;
      }
    }

  return {
    detalls,
    render: (
    <StyledDetalls>
      <div className='wrapperDetalls'>
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
      <div className='wrapperDetalls'>
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
  )};
}

export default Detalls;
