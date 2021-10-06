import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CustomButtonContainer = styled.div`
  position: absolute;
  top: 255px;
  display: none;
  transition: all 0.5s ease-in;
`;

export const CollectionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin-bottom: 2rem;

  &:hover {
    ${CustomButtonContainer} {
      opacity: 0.85;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 0 0.4rem 0;
`;

export const CollectionName = styled.div`
  width: 90%;
`;

export const CollectionPrice = styled.div`
  width: 10%;
`;
