import { useNavigate } from "react-router-dom";
import Contenidor from "../Contenidor/Contenidor";
import { StyledBenvinguda } from "./Benvinguda.styles";

function Benvinguda() {
  const navigate = useNavigate();
  return (
    <Contenidor>
      <StyledBenvinguda>
          <h1>Benvingut</h1>
          <p style={{paddingBottom: "15px"}}>
            En aquesta pàgina podràs el·laborar, guardar i compartir els teus
            pressupostos per fer pàgines web, consultories SEO i campanyes de
            Google Ads.
          </p>
          <div><button onClick={() => navigate("/pressupost/")}>Començar</button></div>
      </StyledBenvinguda>
    </Contenidor>
  );
}

export default Benvinguda;
