import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 3.2rem;
    gap: 0.8rem;

> label {
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
}
    > input {
        width: 31.6rem;
        outline: none;
        border: none;
        border-radius: 0.8rem;
        padding: 1.6rem 1.4rem;
        background: ${({theme}) => theme.COLORS.DARK_900};

        font-size: 1.6rem;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        font-family: "Roboto", sans-serif;

        &::placeholder {
            font-size: 1.6rem;
            color: ${({theme}) => theme.COLORS.LIGHT_500};
            font-family: "Roboto", sans-serif;
        }
    }
`