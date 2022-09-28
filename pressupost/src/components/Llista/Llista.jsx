import { Llista as StyledLlista } from "./Llista.styles";

const Llista = ({ pressupostos }) => {
  const printServeis = (pressu) => {
    let string = [];

    if (pressu.web.requested) {
      string.push("web");
    }
    if (pressu.seo.requested) {
      string.push("seo");
    }
    if (pressu.ads.requested) {
      string.push("ads");
    }
    return string.join(" ")
  }

  return (
    <StyledLlista>
      <h3>Pressupostos Guardats</h3>
      <div>
        <button>Nom</button>
        <button>Data</button>
        <button>X</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Nom</th>
            <th>Serveis</th>
            <th>Data</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {pressupostos.map((pressu) => (
            <tr key={pressu.data}>
              <td>{pressu.serveis.client}</td>
              <td>{pressu.serveis.nom}</td>
              <td>{printServeis(pressu.serveis)}</td>
              <td>{pressu.data.toLocaleDateString().slice(0, -5)}</td>
              <td>{pressu.calcularTotal()} €</td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledLlista>
  );
};

export default Llista;
