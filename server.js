const express = require('express');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const app = express();

const PORT = process.env.PORT || 8080;

const jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://dev-66hr3l2b.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://api.sleepy-cliffs-41653.herokuapp.com/',
    issuer: 'https://dev-66hr3l2b.auth0.com/',
    algorithms: ['RS256']
});

app.use(jwtCheck);

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });