import './sign-in-and-sign-out-page.styles.scss';
import SignIn from '../../components/sign-in/sing-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignOut = () => (
  <div className="sign-in-and-sign-out-page">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignOut;
