import { Component } from 'react';
import { connect } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { ButtonContainer, SignInContainer } from './sign-in.styles';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    // eslint-disable-next-line no-shadow
    const { emailSignInStart } = this.props;

    emailSignInStart(email, password);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    // eslint-disable-next-line no-shadow
    const { googleSignInStart } = this.props;
    return (
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign in with our email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            id="email"
            label="Email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            id="password"
            label="Password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <ButtonContainer>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </ButtonContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
