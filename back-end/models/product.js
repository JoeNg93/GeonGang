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
    const brand = await Brand.getBrand({ id: this.brandId });
    return brand;
  }

  async category() {
    const { Category } = require('./category');
    const category = await Category.getCategory({ id: this.categoryId });
    return category;
  }

  async reviews() {
    const { Review } = require('./review');
    const reviews = await Review.getReviewsByProductId({ productId: this.id });
    return reviews;
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
