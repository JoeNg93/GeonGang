const knex = require('../utils/knex_config');

const userSchema = `
  type User {
    id: Int!
    email: String!
    name: String!
    gender: String!
    age: Int!
    skinColor: String!
    skinType: String!
    climate: String!
    skinCondition: String!
    reviews: [Review]!
    favoriteProducts: [Product]!
    userId: Int!
    friends: [User]!
  }
`;

class User {
  constructor(
    id,
    name,
    gender,
    age,
    skinColor,
    skinType,
    climate,
    skinCondition,
    userId
  ) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.skinColor = skinColor;
    this.skinType = skinType;
    this.climate = climate;
    this.skinCondition = skinCondition;
    this.userId = userId;
  }

  async email() {
    const row = await knex
      .select('email')
      .from('user_credential')
      .where('id', this.userId)
      .first();
    return row.email;
  }

  async reviews() {
    const { Review } = require('./review');
    const reviews = await Review.getReviewsByUserId({ userId: this.userId });
    return reviews;
  }

  async favoriteProducts() {
    const { Product } = require('./product');
    const products = await knex
      .select(
        'product.id',
        'product.name',
        'product.price',
        'product.rating',
        'product.num_of_reviews',
        'product.ingredients',
        'product.tag',
        'product.img_src',
        'product.category_id',
        'product.brand_id'
      )
      .from('product_added')
      .join('product', 'product_added.product_id', 'product.id')
      .where('user_id', this.userId)
      .map(
        row =>
          new Product(
            row.id,
            row.name,
            row.price,
            row.rating,
            row.num_of_reviews,
            row.ingredients,
            row.tag,
            row.img_src,
            row.category_id,
            row.brand_id
          )
      );
    return products;
  }

  async friends() {
    const friends = await knex
      .select('*')
      .from('friend')
      .where('user1_id', this.userId)
      .orWhere('user2_id', this.userId)
      .map(row =>
        User.getUser({
          id: this.userId === row.user1_id ? row.user2_id : row.user1_id
        })
      );
    return friends;
  }

  static async getAllUsers() {
    const users = await knex
      .select('*')
      .from('user_info')
      .map(
        row =>
          new User(
            row.id,
            row.name,
            row.gender,
            row.age,
            row.skin_color,
            row.skin_type,
            row.climate,
            row.skin_condition,
            row.user_id
          )
      );
    return users;
  }

  static async getUser({ id }) {
    const row = await knex
      .select('*')
      .from('user_info')
      .where('user_id', id)
      .first();
    return row
      ? new User(
          row.id,
          row.name,
          row.gender,
          row.age,
          row.skinColor,
          row.skinType,
          row.climate,
          row.skin_condition,
          row.user_id
        )
      : null;
  }

  static async getMyProfile(args, { user }) {
    const rowInUserInfo = await knex
      .select('*')
      .from('user_info')
      .where('user_id', user.id)
      .first();
    return rowInUserInfo
      ? new User(
          rowInUserInfo.id,
          rowInUserInfo.name,
          rowInUserInfo.gender,
          rowInUserInfo.age,
          rowInUserInfo.skin_color,
          rowInUserInfo.skin_type,
          rowInUserInfo.climate,
          rowInUserInfo.skin_condition,
          rowInUserInfo.user_id
        )
      : null;
  }
}

module.exports = { userSchema, User };
