import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 5.6rem 2.8rem 2.4rem;

  background: ${({ theme }) => theme.COLORS.DARK_700};

  display: flex;
  align-items: center;
  justify-content: ${({ isAdmin }) => isAdmin ? 'none' : 'space-between'};

  grid-area: header;

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;

    > span {
      font-size: 1.2rem;
      font-family: 'Roboto', sans-serif;
      color: ${({theme}) => theme.COLORS.CAKE_200};
      margin-left: 0.8rem;
    }

  }

  .receipt {
    position: relative;
  }

  .requests {
    width: 2rem;
    height: 2rem;
    
    background: ${({theme}) => theme.COLORS.RED_200};

    border-radius: 50%;

    position: absolute;
    top: -0.4rem;
    right: -0.4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;

    color: ${({theme}) => theme.COLORS.LIGHT_100};
    
  }

  > div {
    img {
      width: 2.4rem;
      height: 2.4rem;
    }

    h1 {
      font-size: 2.1rem;
    }
  }
`;
