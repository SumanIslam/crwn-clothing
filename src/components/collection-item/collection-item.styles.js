import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin-bottom: 2rem;

  .custom-button {
    width: 80%;
    position: absolute;
    top: 255px;
    opacity: 0.7;
    display: none;
    transition: all 0.5s ease-in;
  }
  &:hover {
    .image {
      opacity: 0.8;
    }
    .custom-button {
      opacity: 0.85;
      display: block;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const CollectionName = styled.div`
  width: 90%;
`;

export const CollectionPrice = styled.div`
  width: 10%;
`;
