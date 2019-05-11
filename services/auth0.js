// src/Auth/Auth.js

import auth0 from 'auth0-js';

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
  }


  login() {
    this.auth0.authorize();
  }
}

const auth0Clinet = new Auth0();
export default auth0Clinet;