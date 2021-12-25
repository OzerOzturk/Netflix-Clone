import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {FirebaseContext} from '../context/firebase';
import {HeaderContainer} from "../containers/header";
import {FooterContainer } from '../containers/footer';
import {Form} from '../components';
import * as ROUTES from '../constants/routes';

export default function Signup() {
    const navigate = useNavigate();
    const {firebase} = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || password === '' || emailAddress === '' ;

    const handleSignup = (event) => {
        event.preventDefault();

        return firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            navigate(ROUTES.SIGN_IN)
          })
      )
      .catch((error) => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };


    return  (
        <>
    <HeaderContainer>
        <Form>
            <Form.Title>Sign Up</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}

            <Form.Base onSubmit={handleSignup} method='POST' >
                <Form.Input
                    placeholder='First name'
                    value={firstName}
                    onChange={({target}) => setFirstName(target.value)}
                />
                <Form.Input
                    placeholder='Email address'
                    value={emailAddress}
                    onChange={({target}) => setEmailAddress(target.value)}
                />
                <Form.Input
                    type='password'
                    value={password}
                    autoComplete='off'
                    placeholder='Password'
                    onChange={({target}) => setPassword(target.value)}
                />
                <Form.Submit disabled={isInvalid} type='submit'>
                    Sign Up
                </Form.Submit>

                <Form.Text>
                    Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
                </Form.Text>
                <Form.TextSmall>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                </Form.TextSmall>

            </Form.Base>
        </Form>
    </HeaderContainer>
    <FooterContainer/>
    </>
    )
}