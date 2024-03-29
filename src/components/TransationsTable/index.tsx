import { api } from "../../services/api";
import { Container } from "./style";
import { useEffect } from 'react';
 
export function TransationsTable() {
   useEffect (() => {
        api.get('/transactions')
        .then(response => console.log(response.data))
   }, []);
   
    return (
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
                        <td>Desemvolvimento de websites</td>
                        <td className="deposit" >R$12000,00</td>
                        <td>Desemvolvimento</td>
                        <td>25/02/2024</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$500,00</td>
                        <td>Casa</td>
                        <td>27/02/2024</td>
                    </tr>
                </tbody>          
            </table>
        </Container>
    )
}