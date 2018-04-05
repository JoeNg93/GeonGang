const express = require('express');
const validator = require('validator');
const bcrypt = require('bcrypt');
const knex = require('../../utils/knex_config');
const router = express.Router();

const { requireInputs } = require('../../utils/middlewares');
    return;
  }
  next();
};

router.post('/signup', requireInputs('email', 'password'), async (req, res) => {
  const { email, password } = req.body;

  // Validate user input
  if (!validator.isEmail(email)) {
    res.status(400).send({ error: 'Email is not valid!' });
    return;
  }
  if (password.length < 6) {
    res
      .status(400)
      .send({ error: 'Password needs to be have more than 6 characters!' });
    return;
  }
  const isEmailExist = !!await knex
    .select('*')
    .from('user_credential')
    .where('email', email)
    .first();
  if (isEmailExist) {
    res.status(400).send({ error: 'Email is already exist!' });
    return;
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await knex
    .insert({ email, password: hashedPassword })
    .into('user_credential');
  res.status(201).send('OK');
});

module.exports = router;
