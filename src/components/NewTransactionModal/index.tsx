import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';
import { api } from '../../services/api';
// --------------------------------------------------------------------- Importações de arquivos Js --------|

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImage from '../../assets/botaoFechar.svg';
// --------------------------------------------------------------------- Importações de Imagens ------------|

import { Container, TransactionTypeContainer, RadioBox } from './styles';

// --------------------------------------------------------------------- Importações de estilo -------------|


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTransaction } = useTransactions();

    const [title, setTitle] = useState('');               // input de texto 
    const [amount, setAmount] = useState(0);               // input numérico 
    const [category, setCategory] = useState('');       // input de texto
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault(); // preventDefault - previnir o funcionamento padrão 

        await createTransaction({
            title,
            amount,
            category,
            type,
        })

    // Resetar o valor dos campos e fechar a janela quando apertar no botão cadastrar 
        setTitle('');     
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();

    }



    return (
        <Modal 
            isOpen={isOpen}               // Função executada para quando o usuário pedir para abrir o Modal 
            onRequestClose={onRequestClose} // A função que deve ser executada quando o usuário pedir para fechar o modal
            overlayClassName="react-modal-overlay" // substituir a estilização totaldo modal - zerar a estilização 
            className="react-modal-content"
        > 

            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
            >

                <img src={closeImage} alt="Fechar Modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}> 
                <h2>Cadastrar transação</h2>

                <input 
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)} // Toda vez que acontece uma digitação/ uma troca de valor do input eu salvo o novo valor digitado dentro da propriedade title. E como essa propriedade é armazenada no estado a gente coloca ela no value aqui, para sempre que ela tiver seu valor alterado, refletir também n valor aqui dentro do input
                />

                <input 
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit'); }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => { setType('withdraw'); }}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>

                </TransactionTypeContainer>  

                <input 
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                    
                />

                <button type="submit">
                    Cadastrar 
                </button>
            </Container>
        </Modal>
    );
}

function transactionsContext(transactionsContext: any) {
    throw new Error('Function not implemented.');
}
