import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;
    
    border: none;
    border-radius: 0.5rem;

    background: ${({theme}) => theme.COLORS.RED_100};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    font-weight: 500;

    margin-bottom: 3.2rem;

    cursor: pointer

`