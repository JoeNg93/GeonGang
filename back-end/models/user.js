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
    reviews: [Review]!
    records: [Record]!
    favoriteProducts: [Product]!
  }
`;

class User {
  constructor(id, name, gender, age, skinColor, skinType, climate) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.skinColor = skinColor;
    this.skinType = skinType;
    this.climate = climate;
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
    const reviews = await knex
      .select('*')
      .from('review')
      .where('user_id', this.id)
      .map(
        row =>
          new Review(
            row.id,
            row.content,
            row.rating,
            row.num_of_likes,
            row.user_id,
            row.product_id
          )
      );
    return reviews;
  }

  async records(args, { user }) {
    if (this.id !== user.id) {
      return [];
    }

    const { Record } = require('./record');
    const records = await knex
      .select('*')
      .from('record')
      .where('user_id', this.id)
      .map(
        row =>
          new Record(
            row.id,
            row.date,
            row.overall_score,
            row.tag,
            row.moisture,
            row.dirt,
            row.uv,
            row.pigmentation,
            row.user_id
          )
      );
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
            row.climate
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
          row.climate
        )
      : null;
  }

  static async getMyProfile(args, { user }) {
    const row = await knex
      .select('*')
      .from('user_info')
      .where('id', user.id)
      .first();
    return new User(
      row.id,
      row.name,
      row.gender,
      row.age,
      row.skin_color,
      row.skin_type,
      row.climate
    );
  }
}

module.exports = { userSchema, User };
