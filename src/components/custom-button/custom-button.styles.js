import styled, { css } from 'styled-components';

const invertedButtonStyles = css`
  background-color: white;
  color: #222;
  border: 1px solid #222;
  font-weight: bold;
  min-width: 220px;
  width: auto;

  &:hover {
    background-color: #222;
    color: white;
  }
`;

const googleSignInButtonStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const buttonStyles = css`
  background-color: #222;
  color: white;

  &:hover {
    background-color: white;
    color: #222;
    border: 1px solid #222;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInButtonStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 30px 0 30px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in;
  ${getButtonStyles}
`;
