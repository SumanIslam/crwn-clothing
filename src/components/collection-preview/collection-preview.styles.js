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
  display: flex;
  justify-content: space-between;
`;
