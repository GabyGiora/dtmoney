import styled from 'styled-components';
import { darken, transparentize } from 'polished'


export const Container = styled.form`
    h2 {
        color: var(--text-title); 
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem; 
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {                  // Todo input que tiver um input antes dele, eu quero que tenha um margin-top 1rem 
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #FFF; 
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover {              // Quando passar-mos o mouse por cima do botão vamos diminir a luminozidade do botão para 0.9
            filter: brightness(0.9);
        }
    }
`;


export const TransactionTypeContainer = styled.div `
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;      //espaçamento entre cada um dos botões

`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';   // green or red
}


const colors = {  // Map das colors 
    green : '#33CC95',
    red : '#E52E4D'
};

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${(props) => props.isActive 
        ? transparentize(0.9, colors[props.activeColor])  // Ao importar transparentize do polished, lá encima, eu passo ela entre esses parâmetros 'colors[props.activeColor]' e falo que quero deixar 0.9 - (90%) transparente e só 10% do resto das cores green e red   
        : 'transparent'                                  // É diferente de opacity porque o opacity ele vai aplicar no botão inteiro, e essa aplica somente no background  
    };

     // Toda vez que passar uma função dentro de uma interpolação essa função vai ser chamada altomaticamente pelo styled component passando todas as propriedades do meu componente 
    // Dentro desse props eu tenho acesso a propriedade isActive
   // Qunado não coloca chaves por volta de uma função o conteúdo dela faz um retun automático

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    &:hover {
        border-color: ${darken(0.1, '#d7d7d7')}; // Eu quero escurecer em 10% a cor d7d7d7
    }

    img {
        width: 20px;
        height: 20px;
    } 

    span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }
`;