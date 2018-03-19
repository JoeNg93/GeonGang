const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const apiRouter = require('./api');

app.use(bodyParser.json());

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.send('OK');
});

app.listen(5001, () => console.log('Server is listening on port 5001'));

module.exports = app;
