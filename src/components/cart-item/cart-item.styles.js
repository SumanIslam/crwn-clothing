import styled from 'styled-components';

export const CartItemcontainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // padding: 10px 20px;
`;

export const ItemName = styled.p`
  font-size: 16px;
`;
