//import { useEffect } from "react";
import Contenidor from "../components/Contenidor/Contenidor";
import Llista from "../components/Llista/Llista";
import Pressupost from "../components/Pressupost/Pressupost";

function Main() {
  // Destructuració del component Pressupost per obtenir l'objecte {savedPressus} i el component Pressupost
  const { savedPressus, render } = Pressupost();

  return (
    <Contenidor>
      {render}
      <Llista pressupostos={savedPressus}></Llista>
    </Contenidor>
  );
}

export default Main;
