import { useState } from 'react';
import Modal from 'react-modal'; // Quando aqui deu erro eu instalei - yarn add @types/react-modal -D
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';  // Tirei o TransactionsContext daqui, pq não tinha no do Diego 
import { GlobalStyle } from "./styles/global";


Modal.setAppElement('#root'); //Acessibilidade 

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);   // Se o modal de nova transação estiver aberto isso retorna true 
                                                                                      // Aqui no useState está como false, porque o modal por padrão vem fechado
  

    function handleOpenNewTransactionModal() {  // Quando vai criar uma função que é executada a partir de uma ação que usuário faz, o Diego inicia com handle
        setIsNewTransactionModalOpen(true);    // Aqui nesse código vai ser setado a informação que o modal está aberto 
    }

    function handleCloseNewTransactionModal() {  // handle -- O usuário vai clicar/executar alguma coisa para essa função acontecer 
        setIsNewTransactionModalOpen(false);    //  Aqui nesse código vai ser setado a informação de que o modal está fechado 
    }

  return (                               
    <TransactionsProvider>                                   
      <Header onOpenNewTranslationModal={handleOpenNewTransactionModal} />

      <Dashboard />

    <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
    
    />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
