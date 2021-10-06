import styled from 'styled-components';

export const CheckoutpageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
    margin-left: auto;
    margin-top: 2rem;
  }

  @media screen and (max-width: 1050px) {
    width: 65%;
  }

  @media screen and (max-width: 900px) {
    width: 75%;
  }

  @media screen and (max-width: 720px) {
    width: 85%;
  }

  @media screen and (max-width: 600px) {
    width: 95%;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const TotalBlock = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
