import { useState } from "react";
import { Popup as StyledPopup } from "./Popup.styles";

const Popup = ({ pagines, idiomes }) => {
  const [popup, setPopup] = useState(false);

  return (
    <StyledPopup>
      <div className="infoDetalls" onClick={() => setPopup(true)}>
        i
      </div>
      <div
        className="contenidor"
        style={{ display: popup ? "flex" : "none" }}
        onClick={(e) => {if (e.currentTarget === e.target) {setPopup(false)}}}
      >
        <div className="popUp">
          <p>
            En aquest apartat pots escollir el número de pàgines de la teva web,
            i els idiomes en què vols que estigui disponible.
          </p>
          <p>
            En aquests moments tens {pagines}{" "}
            {pagines === 1 ? "pàgina" : "pàgines"} en {idiomes}{" "}
            {idiomes === 1 ? "idioma" : "idiomes"}.
          </p>
        </div>
      </div>
    </StyledPopup>
  );
};

export default Popup;
