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
    records: [Record]!
    favoriteProducts: [Product]!
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
    skinCondition
  ) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.skinColor = skinColor;
    this.skinType = skinType;
    this.climate = climate;
    this.skinCondition = skinCondition;
  }

  async email() {
    const row = await knex
      .select('email')
      .from('user_credential')
      .where('user_id', this.id)
      .first();
    return row.email;
  }

  async reviews() {
    const { Review } = require('./review');
    const reviews = await Review.getReviewsByUserId({ userId: this.id });
    return reviews;
  }

  async records(args, { user }) {
    if (this.id !== user.id) {
      return [];
    }

    const { Record } = require('./record');
    const records = await Record.getRecordsByUserId({ userId: this.id });
    return records;
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
      .where('user_id', this.id)
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
            row.skin_condition
          )
      );
    return users;
  }

  static async getUser({ id }) {
    const row = await knex
      .select('*')
      .from('user_info')
      .where('id', id)
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
          row.skin_condition
        )
      : null;
  }

  static async getMyProfile(args, { user }) {
    const rowInUserCredential = await knex
      .select('*')
      .from('user_credential')
      .where('id', user.id)
      .first();
    if (!rowInUserCredential) {
      return null;
    }
    const rowInUserInfo = await knex
      .select('*')
      .from('user_info')
      .where('id', rowInUserCredential.user_id)
      .first();
    return new User(
      rowInUserInfo.id,
      rowInUserInfo.name,
      rowInUserInfo.gender,
      rowInUserInfo.age,
      rowInUserInfo.skin_color,
      rowInUserInfo.skin_type,
      rowInUserInfo.climate,
      rowInUserInfo.skin_condition
    );
  }
}

module.exports = { userSchema, User };
