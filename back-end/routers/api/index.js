const express = require('express');
const fs = require('fs');
const path = require('path');
const showdown = require('showdown');
const router = express.Router();
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const { userSchema, User } = require('../../models/user');
const { brandSchema, Brand } = require('../../models/brand');

showdown.setFlavor('github');

const schema = buildSchema(`
  type Query {
    allUsers: [User]!
    user(id: Int!): User
    
    allBrands: [Brand]!
    brand(id: Int!): Brand
  }
  
  ${userSchema}
  ${brandSchema}
`);

const rootValue = {
  allUsers: User.getAllUsers,
  user: User.getUser,

  allBrands: Brand.getAllBrands,
  brand: Brand.getBrand
};

router.get('/', (req, res) => {
  fs.readFile(path.resolve('routers', 'api', 'doc.md'), (err, data) => {
    if (err) {
      res.send('ERROR: ' + err);
      return;
    }
    const converter = new showdown.Converter();
    const html = converter.makeHtml(data.toString());
    res.send(html);
  });
});

router.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
  })
);

module.exports = router;
