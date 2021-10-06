import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;

  @media screen and (max-width: 420px) {
    width: 360px;
  }

  @media screen and (max-width: 370px) {
    width: 340px;
  }
`;
