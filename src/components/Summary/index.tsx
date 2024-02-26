
import { Container } from "./style";
import entrada from "../../assets/entradas.svg"
import saida from "../../assets/saidas.svg"
import money from "../../assets/money.svg"

export function Summary() {
    return (
        <Container>
            <div>
            <header>
                <p>Entradas</p>
                <img src={entrada} alt="dentro" />
            </header>
            <strong>$1000,00</strong>
            </div>
            <div>
            <header>
                <p>Saidas</p>
                <img src={saida} alt="fora" />
            </header>
            <strong>-$500,00</strong>
            </div>
            <div className="lado_3" >
            <header>
                <p>Total</p>
                <img src={money} alt="dinheiro" />
            </header>
            <strong>$500,00</strong>
            </div>
        </Container>
    )
}