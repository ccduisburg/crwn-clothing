import React from 'react'
import SigIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import {SignInAndSignUpContainer} from './sign-in-and-sign-up.styles';
const SignInAndSignUpPage = () => (
    <SignInAndSignUpContainer>
    <SigIn />
    <SignUp />
  </SignInAndSignUpContainer>
)
export default SignInAndSignUpPage;