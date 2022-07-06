import { useState } from "react";

function App() {
  const [serveis, setServeis] = useState({
    web: false,
    seo: false,
    ads: false
  });

  const [pressu, setPressu] = useState(0);

  const handleInputChange = (event) => {
    setServeis({
      ...serveis,
      [event.target.name] : event.target.checked
    })
    setPressu(
      event.target.checked ? pressu + parseInt(event.target.value) : pressu - parseInt(event.target.value)
    )
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
      <p>Preu: {pressu} €</p>
    </>
  );
}

export default App;
