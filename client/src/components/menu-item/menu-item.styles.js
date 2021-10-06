import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: ${({ size }) => (size ? '300px' : '200px')};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;

    & ${ImageContainer} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }

  @media screen and (max-width: 800px) {
    height: ${({ size }) => (size ? '200px' : '200px')};
  }
`;

export const ContentConatiner = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  transition: all 0.5s ease;
`;

export const TitleConatiner = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: uppercase;
`;

export const SubTitleConatiner = styled.span`
  font-weight: normal;
  letter-spacing: 1.5px;
  font-size: 18px;
`;
