// src/Auth/Auth.js

import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';


class Auth0 {

  constructor() {
    this.auth0 = new auth0.WebAuth({
        domain: 'fmtech-dev.auth0.com',
        clientID: 'DcZA570RLDXutAmLPQKCBrpAOxW4WMbW',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile'
    });

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication() {

    return new Promise((resolve, reject) => {
      debugger;
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          reject(err);
          console.log(err);
          alert(`Error: ${err.error}. Check the console for further details.`);
        }
      });
    })
  }

  setSession(authResult) {

    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    // this.accessToken = authResult.accessToken;
    // this.idToken = authResult.idToken;
    // this.expiresAt = expiresAt;

    Cookies.set('user', authResult.idTokenPayload);
    Cookies.set('jwt', authResult.idToken);
    Cookies.set('expiresAt', expiresAt);
    // navigate to the home route
  }
  login() {
    this.auth0.authorize();
  }

  logout() {
    Cookies.remove('user');
    Cookies.remove('jwt');
    Cookies.remove('expiresAt');

    this.auth0.logout({
      returnTo: '',
      clientID: 'DcZA570RLDXutAmLPQKCBrpAOxW4WMbW'
    })
  }




  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = Cookies.getJSON('expiresAt');
    console.log(new Date().getTime() < expiresAt)
    return new Date().getTime() < expiresAt;
  }
  
  
  clientAuth() {
    return this.isAuthenticated();
   }
 
 serverAuth(req) {
   if (req.headers.cookie){
     const expiresAtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('expiresAt=') );

     if(!expiresAtCookie) { return undefined};

     const expiresAt = expiresAtCookie.split("=")[1];

     return new Date().getTime() < expiresAt; 
   }
 }
}



const auth0Clinet = new Auth0();

export default auth0Clinet;