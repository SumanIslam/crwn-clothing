import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const PreviewTitle = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  width: 9%;
  &:hover {
    text-decoration: underline;
  }
`;

export const Preview = styled.div`
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
