import styled from "styled-components";

export const Container = styled.div`

    > .content {
        display: grid;
        place-content: center;
        height: 100vh;

        > div:nth-child(1){
            margin-bottom: 7.3rem;
        }

        a {
            font-family:"Poppins", sans-serif;
            font-weight: 500;
            font-size: 1.4rem;
            text-decoration: none;
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            display: flex;
            justify-content: center;
        }
    }
`