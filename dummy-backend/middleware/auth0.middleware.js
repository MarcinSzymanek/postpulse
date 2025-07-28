const { auth } = require("express-oath2-jwt-bearer");

const validateAccessToken = auth({
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
  audience: process.env.AUTH0_AUDIENCE,
  tokenSigningAlg: process.env.SIGNING_ALG,
});

module.exports = {
  validateAccessToken,
};
