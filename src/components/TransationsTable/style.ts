import styled from 'styled-components'

export const Container = styled.div `

        margin-top: 4rem;
        
    table {
        
        width: 100%;
        border-spacing: 0 0.5rem;

        th {        
            font-weight: 400;
            text-align: left;
            line-height: 1.5rem;
            padding: 1rem 2rem;
            color: var(--titulos);
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--place_holder);
            border-radius: 0.25rem;
            color: var(--titulos);

            &:first-child {
                color: var(--shap_terciaria);
            }

            &.deposito {
                color: var(--grean_light);
            }

            &.withdraw {
                color: var(--red_dark);
            }
        }
    }
`