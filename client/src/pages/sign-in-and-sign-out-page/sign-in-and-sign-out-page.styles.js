import styled from 'styled-components';

export const SignInAndSignOutPageContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;
