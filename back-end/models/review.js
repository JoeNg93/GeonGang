const knex = require('../utils/knex_config');

const reviewSchema = `
  type Review {
    id: Int!
    content: String!
    rating: Float!
    numOfLikes: Int!
    user: User!
    product: Product!
  }
`;

class Review {
  constructor(id, content, rating, numOfLikes, userId, productId) {
    this.id = id;
    this.content = content;
    this.rating = rating;
    this.numOfLikes = numOfLikes;
    this.userId = userId;
    this.productId = productId;
  }

  async user() {
    const { User } = require('./user');
    const user = await User.getUser({ id: this.userId });
    return user;
  }

  async product() {
    const { Product } = require('./product');
    const product = await Product.getProduct({ id: this.productId });
    return product;
  }

  static async getReviewsByProductId({ productId }) {
    const reviews = await knex
      .select('*')
      .from('review')
      .where('product_id', productId)
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

  static async getReviewsByUserId({ userId }) {
    const reviews = await knex
      .select('*')
      .from('review')
      .where('user_id', userId)
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
}

module.exports = { reviewSchema, Review };
