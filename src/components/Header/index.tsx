import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTranslationModal: () => void; // Quando é um componente que recebe uma função o Diego gosta de começar sempre com on 
                                          // Essa propriedade é uma função e o retorno dessa função é vazio 
}

export function Header({ onOpenNewTranslationModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTranslationModal}>   
                    Nova Transação
                </button>  
            </Content>
        </Container>
    )
}

// Quando a pessoa clicar no botão o que vai ser executado vai ser a função que vai abrir o modal 