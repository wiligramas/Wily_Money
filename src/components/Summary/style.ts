import styled from "styled-components"

export const Container = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -9rem;

    div {

        background: var(--place_holder);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: #fff;
        

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 5rem;
            line-height: 3rem; 
        }

        &.lado_3 {
            background: var(--grean_dark);
            color: #fff;
        }

    }

`