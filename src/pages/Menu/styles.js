import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 11.4rem 4.8rem auto 7.7rem;
    grid-template-areas: 
    "header"
    "search"
    "options"
    "footer"
    ;
`

export const Search = styled.input`
    grid-area: search;
`

export const Options = styled.div`
    grid-area: options;
`