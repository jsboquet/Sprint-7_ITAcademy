import { useState, useEffect } from "react";
import Panell from "./components/Panell";
import Detalls from "./components/Detalls";

function App() {
  // Estat del conjunt de checkboxes del formulari
  const [serveis, setServeis] = useState(() => {
    const localSaved = localStorage.getItem("serveis");
    const estatInicial = JSON.parse(localSaved);
    return {
      web: {requested: estatInicial.web.requested || false, valor: 500},
      seo: {requested: estatInicial.seo.requested || false, valor: 300},
      ads: {requested: estatInicial.ads.requested || false, valor: 200},
    };
  });

  // Funció per quan canvien els checkbox
  const handleInputChange = (event) => {
    setServeis({
      ...serveis,
      [event.target.name]: {
        valor: parseInt(event.target.value),
        requested: event.target.checked
      },
    });
  };

  // Destructuració del component Detalls
  const { detalls, render } = Detalls();

  // LocalStorage
  useEffect(() => {
    try {
      window.localStorage.setItem("serveis", JSON.stringify(serveis));
    } catch (error) {
      console.log(error);
    }
  }, [serveis]);

  // State amb el pressupost total!
  const [total, setTotal] = useState(0);

  useEffect(
    () =>
      setTotal(() => {
        let valorSaved = 0;
        if (serveis.web.requested) {valorSaved = valorSaved + serveis.web.valor}
        if (serveis.seo.requested) {valorSaved = valorSaved + serveis.seo.valor}
        if (serveis.ads.requested) {valorSaved = valorSaved + serveis.ads.valor}
        
        return serveis.web.requested
          ? valorSaved + (detalls.idiomes * detalls.pagines * 30)
          : valorSaved;
      }),
    [detalls, serveis]
  );

  return (
    <>
      <p>¿Què vols fer?</p>
      <input
        type="checkbox"
        name="web"
        value={serveis.web.valor}
        onChange={handleInputChange}
        checked={serveis.web.requested}
      />
      <label for="web"> Una pàgina web {serveis.web.valor} €</label>
      <br />
      {serveis.web.requested ? <Panell>{render}</Panell> : <></>}
      <input
        type="checkbox"
        name="seo"
        value={serveis.seo.valor}
        onChange={handleInputChange}
        checked={serveis.seo.requested}
      />
      <label for="seo"> Una consultoria SEO {serveis.seo.valor} €</label>
      <br />
      <input
        type="checkbox"
        name="ads"
        value={serveis.ads.valor}
        onChange={handleInputChange}
        checked={serveis.ads.requested}
      />
      <label for="ads"> Una campanya de Google Ads {serveis.ads.valor} €</label>
      <br />
      <p>Preu: {total} €</p>
    </>
  );
}

export default App;
