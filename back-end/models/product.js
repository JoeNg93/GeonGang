const knex = require('../utils/knex_config');

const productSchema = `
  type Product {
    id: Int!   
    name: String!
    price: String!
    rating: Float!
    numOfReviews: Int!
    ingredients: String!
    tag: String
    imgSrc: String!
    brand: Brand!
    category: Category!
    reviews: [Review]!
  }
`;

class Product {
  constructor(
    id,
    name,
    price,
    rating,
    numOfReviews,
    ingredients,
    tag,
    imgSrc,
    categoryId,
    brandId
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.rating = rating;
    this.numOfReviews = numOfReviews;
    this.ingredients = ingredients;
    this.tag = tag;
    this.imgSrc = imgSrc;
    this.categoryId = categoryId;
    this.brandId = brandId;
  }

  async brand() {
    const { Brand } = require('./brand');
    const row = await knex
      .select('*')
      .from('brand')
      .where('id', this.brandId)
      .first();
    return new Brand(row.id, row.name);
  }

  async category() {
    const { Category } = require('./category');
    const row = await knex
      .select('*')
      .from('category')
      .where('id', this.categoryId)
      .first();
    return new Category(row.id, row.name);
  }

  static async getAllProducts() {
    const products = await knex
      .select('*')
      .from('product')
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

  static async getProduct({ id }) {
    const row = await knex
      .select('*')
      .from('product')
      .where('id', id)
      .first();
    return row
      ? new Product(
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
      : null;
  }
}

module.exports = { productSchema, Product };
