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

const errHandlerMiddleware = (err, req, res, next) => {
  let msg = '';
  let statusCode = 200;
  switch (err.name) {
    case 'UnauthorizedError':
      statusCode = 401;
      msg = 'Token is missing or invalid';
      break;
    default:
      statusCode = 500;
      msg = 'Unknown error';
  }
  if (msg) {
    res.status(statusCode).send({ error: msg });
    return;
  }
  next();
};

module.exports = { requireInputs, jwtMiddleware, errHandlerMiddleware };
