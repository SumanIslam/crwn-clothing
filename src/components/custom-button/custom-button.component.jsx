import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  // eslint-disable-next-line react/button-has-type
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''}  custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
