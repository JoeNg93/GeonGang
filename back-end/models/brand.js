const knex = require('../utils/knex_config');

const brandSchema = `
  type Brand {
    id: Int!
    name: String!
  }
`;

class Brand {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  static async getAllBrands() {
    const brands = await knex
      .select('*')
      .from('brand')
      .map(row => new Brand(row.id, row.name));
    return brands;
  }

  static async getBrand({ id }) {
    const row = await knex
      .select('*')
      .from('brand')
      .where('id', id)
      .first();
    return row ? new Brand(row.id, row.name) : null;
  }
}

module.exports = { brandSchema, Brand };
