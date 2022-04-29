import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
  useEffect(() => {
    api.get("/transactions")
      .then((response) => console.log(response.data));
  }, []);

  return (
    <>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Desenvolviemnto de sistemas</td>
              <td className="deposit">R$3.200</td>
              <td>Desenvolvimento</td>
              <td>28/04/2022</td>
            </tr>
            <tr>
              <td>Aluguel</td>
              <td className="withdraw">R$3.200</td>
              <td>DCasa</td>
              <td>18/04/2022</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
}
