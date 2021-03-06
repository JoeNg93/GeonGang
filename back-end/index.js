const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const apiRouter = require('./routers/api/index');
const authRouter = require('./routers/auth/index');

app.use(bodyParser.json());

app.use('/api', apiRouter);

app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.send('OK');
});

app.listen(5001, () => console.log('Server is listening on port 5001'));

module.exports = app;
