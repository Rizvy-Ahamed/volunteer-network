import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";

import { useHistory, useLocation } from 'react-router-dom';

import { UserContext } from '../../../App';
import { Button, Form } from 'react-bootstrap';
import logo from '../../../logos/Group 1329.png';
import { handleGoogleSignIn, initializeLoginFramework } from './LoginManager';

const Login = () => {
    const { setLoggedInUser } = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const {setUser} = useContext(UserContext);
    initializeLoginFramework();
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }
    const handleResponse = (res, redirect) => {
        setUser(res)
        setLoggedInUser(res);
        history.replace(from);
        if (redirect) {

        }
    }
    return (
        <div className="text-center bg-light" style={{ height: '100%' }}>
            <img className="text-center" src={logo} style={{ height: '10vh', marginTop: '5vh' }} alt="" />
            <Form className="container border mt-5 p-5 bg-white" style={{ height: '75vh' }}>
                <h3>Login In with Google </h3>
                <br />
                <Button onClick={googleSignIn} variant="warning">
                    Google Login
                </Button>
            </Form>
            this is login
        </div>
    );
};

export default Login;