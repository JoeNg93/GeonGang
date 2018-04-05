const knex = require('../utils/knex_config');

const userSchema = `
  type User {
    id: Int!
    name: String!
    gender: String!
    age: Int!
    skinColor: String!
    skinType: String!
    climate: String!
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
}

module.exports = { userSchema, User };
