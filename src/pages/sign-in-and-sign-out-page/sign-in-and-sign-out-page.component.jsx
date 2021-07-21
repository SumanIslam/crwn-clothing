import SignIn from '../../components/sign-in/sing-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { SignInAndSignOutPageContainer } from './sign-in-and-sign-out-page.styles';

const SignInAndSignOut = () => (
  <SignInAndSignOutPageContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignOutPageContainer>
);

export default SignInAndSignOut;
