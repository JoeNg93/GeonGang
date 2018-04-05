const jwt = require('express-jwt');
const envConfig = require('./env_config');

const requireInputs = (...inputs) => (req, res, next) => {
  const missingInputs = inputs.filter(input => !req.body[input]);
  if (missingInputs.length) {
    res
      .status(400)
      .send({ error: `Missing arguments: ${missingInputs.join(', ')}` });
    return;
  }
  next();
};

const jwtMiddleware = jwt({ secret: envConfig.jwtSecretKey });

module.exports = { requireInputs, jwtMiddleware };
