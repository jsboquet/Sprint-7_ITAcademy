import { useState, useEffect } from "react";
import Panell from "../Panell";
import Detalls from "../Detalls";
import { Pressupost as StyledPressu } from "./Pressupost.styles";

const Pressupost = () => {
  // Estat del conjunt de inputs del formulari (menys els de dins del panell)
  const [serveis, setServeis] = useState(() => {
    const localSaved = localStorage.getItem("serveis");
    const estatInicial = JSON.parse(localSaved);
    return {
      nom: estatInicial.nom || "",
      client: estatInicial.client || "",
      web: { requested: estatInicial.web.requested || false, valor: 500 },
      seo: { requested: estatInicial.seo.requested || false, valor: 300 },
      ads: { requested: estatInicial.ads.requested || false, valor: 200 },
    };
  });

  // Funció per quan canvien els checkbox
  const handleInputChange = (event) => {
    setServeis({
      ...serveis,
      [event.target.name]: {
        valor: parseInt(event.target.value),
        requested: event.target.checked,
      },
    });
  };

  // Funció per quan canvien els input text
  const handleInputText = (event) => {
    setServeis({
      ...serveis,
      [event.target.name]: event.target.value,
    });
  };

  // Destructuració del component Detalls per obtenir l'objecte {detalls} i el contingut del panell
  const { detalls, render } = Detalls();

  // LocalStorage serveis
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
        if (serveis.web.requested) {
          valorSaved = valorSaved + serveis.web.valor;
        }
        if (serveis.seo.requested) {
          valorSaved = valorSaved + serveis.seo.valor;
        }
        if (serveis.ads.requested) {
          valorSaved = valorSaved + serveis.ads.valor;
        }

        return serveis.web.requested
          ? valorSaved + detalls.idiomes * detalls.pagines * 30
          : valorSaved;
      }),
    [detalls, serveis]
  );

  // Estat amb la llista dels pressupostos
  const [savedPressus, setSavedPressus] = useState([]);

  // Afegir pressu a la llista si no està repetit!
  const savePressu = () => {
    const data = new Date();
    const addObj = { serveis, detalls, data: data };
    if (savedPressus.length === 0) {
      setSavedPressus(() => [addObj]);
    } else {
      if (
        savedPressus.some(
          (pressu) =>
            pressu.serveis.nom === addObj.serveis.nom &&
            pressu.serveis.client === addObj.serveis.client
        )
      ) {
        alert(
          `Ja tens un pressupost per a ${addObj.serveis.client} anomenat ${addObj.serveis.nom}`
        );
      } else {
        setSavedPressus((savedPressus) => [...savedPressus, addObj]);
      }
    }
  };

  return {
    savedPressus,
    render: (
      <StyledPressu>
        <div className="contanier">
          <h2 style={{ textAlign: "center" }}>¿Què vols fer?</h2>
          <br />
          <div className="textInputContanier">
            <label for="web">Pressupost: </label>
            <input
              type="text"
              name="nom"
              value={serveis.nom}
              onChange={handleInputText}
            />
          </div>
          <div className="textInputContanier">
            <label for="web">Client: </label>
            <input
              type="text"
              name="client"
              value={serveis.client}
              onChange={handleInputText}
            />
          </div>
          <br />
          <input
            type="checkbox"
            name="web"
            value={serveis.web.valor}
            onChange={handleInputChange}
            checked={serveis.web.requested}
          />
          <label for="web">
            {" "}
            Pàgina web <span>{serveis.web.valor} €</span>
          </label>
          <br />
          {serveis.web.requested ? <Panell> {render} </Panell> : <></>}
          <input
            type="checkbox"
            name="seo"
            value={serveis.seo.valor}
            onChange={handleInputChange}
            checked={serveis.seo.requested}
          />
          <label for="seo"> Consultoria SEO {serveis.seo.valor} €</label>
          <br />
          <input
            type="checkbox"
            name="ads"
            value={serveis.ads.valor}
            onChange={handleInputChange}
            checked={serveis.ads.requested}
          />
          <label for="ads"> Campanya Google Ads {serveis.ads.valor} €</label>
          <br />
          <h3>Preu: {total} €</h3>
          <div className="saveContainer">
            <button className="saveButton" onClick={savePressu}>
              Guardar
            </button>
          </div>
        </div>
      </StyledPressu>
    ),
  };
};

export default Pressupost;
