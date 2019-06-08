const jwt = require ('express-jwt');
const jwksRsa = require('jwks-rsa');

// MIDDLE WARE 
exports.checkJWT = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestPerMinute: 10,
        strictSsl: true, // Default value
        jwksUri: 'https://fmtech-dev.auth0.com/.well-known/jwks.json',
        requestHeaders: {} // Optional
      }),
    audience: 'DcZA570RLDXutAmLPQKCBrpAOxW4WMbW',
    issuer: 'https://fmtech-dev.auth0.com/',
    algorithms: ['RS256']
})