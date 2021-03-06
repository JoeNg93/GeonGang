const knex = require('../utils/knex_config');

const categorySchema = `
  type Category {
    id: Int!
    name: String!
    products: [Product]!
  }
`;

class Category {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  async products() {
    const { Product } = require('./product');
    const products = await Product.getProductsByCategoryId({
      categoryId: this.id
    });
    return products;
  }

  static async getAllCategories() {
    const brands = await knex
      .select('*')
      .from('category')
      .map(row => new Category(row.id, row.name));
    return brands;
  }

  static async getCategory({ id }) {
    const row = await knex
      .select('*')
      .from('category')
      .where('id', id)
      .first();
    return row ? new Category(row.id, row.name) : null;
  }
}

module.exports = { categorySchema, Category };
