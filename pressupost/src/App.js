import { useState } from "react";
import Panell from "./components/Panell";
import Detalls from "./components/Detalls";

function App() {
  // Estat del conjunt de checkboxes del formulari
  const [serveis, setServeis] = useState({
    web: false,
    seo: false,
    ads: false,
  });

  // Estat amb l'import del cost dels checkboxes
  const [pressupostServeis, setPressupostServeis] = useState(0);

  const handleInputChange = (event) => {
    setServeis({
      ...serveis,
      [event.target.name]: event.target.checked,
    });
    setPressupostServeis(
      event.target.checked
        ? pressupostServeis + parseInt(event.target.value)
        : pressupostServeis - parseInt(event.target.value)
    );
  };

  // Destructuració del component Detalls
  const {detalls, render} = Detalls();

  // Càlcul del cost afegit de les pàgines i els idiomes (detalls)
  const calcDetalls = () => {
    let result = 0;
    if (serveis.web) {
      result = detalls.idiomes * detalls.pagines * 30;
    }
    return result;
  };

  // Falta state del pressupost total!

  return (
    <>
      <p>¿Què vols fer?</p>
      <input
        type="checkbox"
        name="web"
        value="500"
        onChange={handleInputChange}
      />
      <label for="web"> Una pàgina web - 500 €</label>
      <br />
      {serveis.web ? <Panell>{render}</Panell> : <></>}
      <input
        type="checkbox"
        name="seo"
        value="300"
        onChange={handleInputChange}
      />
      <label for="seo"> Una consultoria SEO - 300 €</label>
      <br />
      <input
        type="checkbox"
        name="ads"
        value="200"
        onChange={handleInputChange}
      />
      <label for="ads"> Una campanya de Google Ads - 200 €</label>
      <br />
      <p>Preu: {pressupostServeis + calcDetalls()} €</p>
    </>
  );
}

export default App;
