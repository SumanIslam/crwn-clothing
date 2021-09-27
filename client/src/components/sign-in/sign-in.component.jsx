import React, { useState } from 'react';
import { connect } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { ButtonContainer, SignInContainer } from './sign-in.styles';

// eslint-disable-next-line no-shadow
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredential, setCredential] = useState({ email: '', password: '' });

  const { email, password } = userCredential;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredential({ ...userCredential, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with our email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          id="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          id="password"
          label="Password"
          value={password}
          handleChange={handleChange}
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
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
