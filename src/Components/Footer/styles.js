import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 7.7rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    background: ${({theme}) => theme.COLORS.DARK_600};
    grid-area: footer;

    > div {
        h1 {
            color: ${({theme}) => theme.COLORS.LIGHT_700};
            font-size: 1.5rem;
        } 

        img {
            width: 2rem;
            height: 2rem;
        }
    }

    > p {
        color: ${({theme}) => theme.COLORS.LIGHT_200};
        font-family: 'DM Sans', sans-serif;
        font-size: 1.2rem;
    }
    
`