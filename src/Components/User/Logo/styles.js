import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    > h1 {
        font-family: "Roboto", sans-serif;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }
`