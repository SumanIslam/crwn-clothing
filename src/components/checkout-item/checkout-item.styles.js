import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ItemName = styled.div`
  width: 33%;
`;
export const ItemPrice = styled.div`
  width: 33%;
`;
export const QuantityContainer = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
`;
export const ItemQuantity = styled.div`
  margin: 0 0.5rem;
`;
export const ArrowContainer = styled.div`
  cursor: pointer;
`;

export const RemoveButton = styled.div`
  padding-right: 12px;
  cursor: pointer;
`;
