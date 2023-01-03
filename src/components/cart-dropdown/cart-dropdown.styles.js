import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 260px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    background-color: #fff;
    width: 16px;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 16px;
    border: 4px solid #fff;
  }
  &::-webkit-scrollbar-button {
    display: none;
  }
`;

export const EmptyCartMessage = styled.div`
  font-size: 1.2rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
