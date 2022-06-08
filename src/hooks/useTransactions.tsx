import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { api } from "../services/api";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

// interface TransactionInput {
//     title: string;
//     amount: number;
//     type: string;
//     category: string;
// }

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>; // O TransactionInput vai herdar todos os campos do interface Transaction, menos a id e o crieatedAt ( eu estou omitindo - omit- o id e o createdAt)

//type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category' >; // Aqui está dizendo - Lá no meu Transaction pegue os campos title, amount, type e category
// Pick é o contrário de omit - o omit pega todos os campos e tira alguns, já o Pick você seleciona quais campos você quer


interface TransactionsProviderProps {
    children: ReactNode; 
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>; 
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData  // como só com as chaves ele da erro e não tem como corrigir isso, coloca-se ai o as TransactionsContextData que dai ele vai "Falar" que esse objeto tem sim esse formato, para de reclamar. 
);                                // Ele está forçando uma typagem no TypeScript - meio que enganando o typescript, fazendo com que ele acredite que esse objeto tem sim o formato que ele quer 


export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);


    useEffect(() => {                                      
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))  // Quando ela terminar de converter eu vou dar um console.log nesses dados 
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {  // async - função asincrona 
        const response = await api.post('/transactions', {
            ...transactionInput, 
            createdAt: new Date(),
        })
        // const response - para pegar a resposta da incerssão que a gente fez no banco  
        const { transaction } = response.data;  // acessar a transaction e pegar os dados
    
        setTransactions([      // CONSEITO DE MUTABILIDADE - não estou alterando, estou criando um novo vertor de transações e estou alterando uma nova informação no final 
            ...transactions,  // copiar todas as informações que já estão lá dentro 
            transaction,     // adiciono minha nova informação no final 
        ]);
    }

    return (                                      // Uma chave indica que eu quero incluir JS aqui dentro, e a outra indica que isso aqui é um objeto 
        <TransactionsContext.Provider value={{ transactions, createTransaction }}> 
            {children}
        </TransactionsContext.Provider>
    ); 
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context; 
}