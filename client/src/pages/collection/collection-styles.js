import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleBlock = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;

  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 380px) {
    grid-template-columns: 1fr;
  }
`;
