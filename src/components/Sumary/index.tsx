import { Container } from "./styles";

import iconArrow from "../../assets/iconArrow.png";
import iconArrowDown from '../../assets/iconArrowDown.png'
import iconDollar from '../../assets/dollar.png'

export function Sumary() {
  return (
    <>
      <Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={iconArrow} alt="Entradas" />
          </header>
          <strong>R$1000,00</strong>
        </div>
        <div>
          <header>
            <p>Saídas</p>
            <img src={iconArrowDown} alt="Entradas" />
          </header>
          <strong>- R$250,00</strong>
        </div>
        <div className="hightLight-background">
          <header>
            <p>Total</p>
            <img src={iconDollar} alt="Entradas" />
          </header>
          <strong>R$750,00</strong>
        </div>
      </Container>
    </>
  );
}
