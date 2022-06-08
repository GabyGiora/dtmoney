import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;
            

            &:first-child { // Quando o td é o primeiro td, eu vou colocar a cor de fundo (--text-title)
                color: var(--text-title);
            }

            &.deposit {  // Quando eu tiver a classe deposit a cor do texto vai ter uma cor verde 
                color: var(--green);
            }

            &.withdraw { // Quando eu tiver a classe withdraw a cor do texto vai ser vermelha 
                color: var(--red);
            }
        }
    }
`;