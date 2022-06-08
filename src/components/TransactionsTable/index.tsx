import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {
    const { transactions } = useTransactions()

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
                {transactions.map(transaction => (   // Toda vez que eu faço um map eu tenho que por em todo primeiro elemento do map uma key 
                    <tr key={transaction.id}>  
                        <td>{transaction.title}</td>
                        <td className={transaction.type}>
                            {new Intl.NumberFormat('pt-BR', {           // Reais - moeda BR
                                style: 'currency',
                                currency: 'BRL'
                            }).format(transaction.amount)}
                        </td>
                        <td>{transaction.category}</td>
                        <td>
                        {new Intl.DateTimeFormat('pt-BR').format(    // Data BR
                            new Date(transaction.createdAt)
                        )}
                        </td>
                    </tr>
                ))}
            </tbody>

            </table>
        </Container>
    ); 
}