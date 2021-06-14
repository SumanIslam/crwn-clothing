import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
  // eslint-disable-next-line react/button-has-type
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
