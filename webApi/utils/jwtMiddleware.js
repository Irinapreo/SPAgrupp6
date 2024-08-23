// utils/jwtMiddleware.js
const { expressjwt: expressJwt } = require("express-jwt");

const jwtMiddleware = expressJwt({
  secret: "your_jwt_secret",
  algorithms: ["HS256"],
  credentialsRequired: false, // Gör att middleware inte krävs för alla rutter
});

module.exports = jwtMiddleware;
