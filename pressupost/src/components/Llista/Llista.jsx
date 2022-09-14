import { Llista as StyledLlista } from "./Llista.styles";

const Llista = ({ pressupostos }) => {
  const calcular = (pressu) => {
    let valorSaved = 0;
    if (pressu.serveis.web.requested) {
      valorSaved = valorSaved + pressu.serveis.web.valor;
    }
    if (pressu.serveis.seo.requested) {
      valorSaved = valorSaved + pressu.serveis.seo.valor;
    }
    if (pressu.serveis.ads.requested) {
      valorSaved = valorSaved + pressu.serveis.ads.valor;
    }

    return pressu.serveis.web.requested
      ? valorSaved + pressu.detalls.idiomes * pressu.detalls.pagines * 30
      : valorSaved;
  };

  return (
    <StyledLlista>
      <h3>Pressupostos Guardats</h3>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Client</th>
            <th>Data</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {pressupostos.map((pressu) => (
            <tr key={pressu.data}>
              <td>{pressu.serveis.nom}</td>
              <td>{pressu.serveis.client}</td>
              <td>{pressu.data.toLocaleDateString()}</td>
              <td>{calcular(pressu)} €</td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledLlista>
  );
};

export default Llista;
