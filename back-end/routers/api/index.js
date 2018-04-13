const express = require('express');
const fs = require('fs');
const path = require('path');
const showdown = require('showdown');
const router = express.Router();
const graphqlHTTP = require('express-graphql');
const knex = require('../../utils/knex_config');
const { buildSchema } = require('graphql');
const { userSchema, User } = require('../../models/user');
const { brandSchema, Brand } = require('../../models/brand');
const { categorySchema, Category } = require('../../models/category');
const { productSchema, Product } = require('../../models/product');
const { reviewSchema } = require('../../models/review');
const { recordSchema } = require('../../models/record');
const {
  jwtMiddleware,
  errHandlerMiddleware,
  requireInputs
} = require('../../utils/middlewares');
const { toCamelCaseKey } = require('../../utils/index');

showdown.setFlavor('github');

const schema = buildSchema(`
  type Query {
    allUsers: [User]!
    user(id: Int!): User
    
    allBrands: [Brand]!
    brand(id: Int!): Brand
    
    allCategories: [Category]!
    category(id: Int!): Category
    
    allProducts: [Product]!
    product(id: Int!): Product
    
    myProfile: User
  }
  
  ${userSchema}
  ${brandSchema}
  ${categorySchema}
  ${productSchema}
  ${reviewSchema}
  ${recordSchema}
`);

const rootValue = {
  allUsers: User.getAllUsers,
  user: User.getUser,

  allBrands: Brand.getAllBrands,
  brand: Brand.getBrand,

  allCategories: Category.getAllCategories,
  category: Category.getCategory,

  allProducts: Product.getAllProducts,
  product: Product.getProduct,

  myProfile: User.getMyProfile
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
  jwtMiddleware,
  errHandlerMiddleware,
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
  })
);

router.post(
  '/product-added',
  jwtMiddleware,
  errHandlerMiddleware,
  requireInputs('product_id'),
  async (req, res) => {
    const productId = req.body.product_id;
    const userId = req.user.id;
    // Check product existance
    const rowInProduct = await knex
      .select('*')
      .from('product')
      .where('id', productId)
      .first();
    if (!rowInProduct) {
      res
        .status(400)
        .send({ error: `Product with id ${productId} doesnt exist!` });
      return;
    }

    // Check if product is already added
    const rowInProductAdded = await knex
      .select('*')
      .from('product_added')
      .where('product_id', productId)
      .andWhere('user_id', userId)
      .first();
    if (rowInProductAdded) {
      res
        .status(400)
        .send({ error: `Product with id ${productId} is already added!` });
      return;
    }

    await knex
      .insert({ product_id: productId, user_id: userId })
      .into('product_added');
    res.status(201).send({ data: { product: toCamelCaseKey(rowInProduct) } });
  }
);

router.post(
  '/scanning-result',
  jwtMiddleware,
  errHandlerMiddleware,
  requireInputs(
    'overall_score',
    'tag',
    'moisture',
    'dirt',
    'uv',
    'pigmentation'
  ),
  async (req, res) => {
    const date = new Date();
    const { overall_score, tag, moisture, dirt, uv, pigmentation } = req.body;
    const user_id = req.user.id;
    const rowId = await knex
      .insert({
        date,
        overall_score,
        tag,
        moisture,
        dirt,
        uv,
        pigmentation,
        user_id
      })
      .into('record');
    const rowInRecord = await knex
      .select('*')
      .from('record')
      .where('id', rowId)
      .first();
    res.status(201).send({ data: { record: toCamelCaseKey(rowInRecord) } });
  }
);

router.post(
  '/user-info',
  jwtMiddleware,
  errHandlerMiddleware,
  requireInputs('name', 'gender', 'age', 'skin_color', 'skin_type', 'climate'),
  async (req, res) => {
    // Check if user already has info
    const rowInUserCredential = await knex
      .select('*')
      .from('user_credential')
      .where('id', req.user.id)
      .first();
    if (rowInUserCredential.user_id) {
      res.status(400).send({ error: 'User already entered the info!' });
      return;
    }

    const { name, gender, age, skin_color, skin_type, climate } = req.body;
    // Get back newly added user info id
    const userInfoId = await knex
      .insert({ name, gender, age, skin_color, skin_type, climate })
      .into('user_info');

    // Update user_id in table user_credential
    await knex('user_credential')
      .where('id', req.user.id)
      .update({ user_id: userInfoId });

    const rowInUserInfo = await knex
      .select('*')
      .from('user_info')
      .where('id', userInfoId)
      .first();
    res
      .status(201)
      .send({ data: { myProfile: toCamelCaseKey(rowInUserInfo) } });
  }
);

module.exports = router;
