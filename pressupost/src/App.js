import { useState } from "react";
import Panell from "./components/Panell";

function App() {

  // Checkbox inputs del formulari
  const [serveis, setServeis] = useState({
    web: false,
    seo: false,
    ads: false,
  });

  const [pressu, setPressu] = useState(0);

  const handleInputChange = (event) => {
    setServeis({
      ...serveis,
      [event.target.name]: event.target.checked,
    });
    setPressu(
      event.target.checked
        ? pressu + parseInt(event.target.value)
        : pressu - parseInt(event.target.value)
    );
  };
  
  // Text inputs del panell que apareix amb el checkbox "web"
  const [details, setDetails] = useState({
    pagines: 1,
    idiomes: 1,
  });

  const handleDetailsChange = (event) => {
    if (event.target.value.match("^[0-9]+$")) {
      setDetails({
        ...details,
        [event.target.name]: parseInt(event.target.value),
      });
    }
  };

  const calcDetails = () => {
    let result = 0;
    if (serveis.web) {
      result = details.idiomes * details.pagines * 30;
    }
    return result;
  };

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
      {serveis.web ? (
        <Panell>
          <label for="pagines">Pàgines: </label>
          <input type="text" name="pagines" onInput={handleDetailsChange} placeholder="1"/>
          <label for="idiomes">Idiomes: </label>
          <input type="text" name="idiomes" onInput={handleDetailsChange} placeholder="1"/>
        </Panell>
      ) : (
        <></>
      )}
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
      <p>Preu: {pressu + calcDetails()} €</p>
    </>
  );
}

export default App;
