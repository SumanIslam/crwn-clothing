import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 420px) {
    width: 360px;
  }

  @media screen and (max-width: 370px) {
    width: 340px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: grid;
    grid-gap: 5px;
    min-width: 50%;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 420px) {
    display: grid;
    grid-gap: 5px;
    min-width: 50%;
  }
`;
