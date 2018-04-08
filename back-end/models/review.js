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
    const row = await knex
      .select('*')
      .from('user_info')
      .where('id', this.userId)
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

  async product() {
    const { Product } = require('./product');
    const row = await knex
      .select('*')
      .from('product')
      .where('id', this.productId)
      .first();
    return new Product(
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
    );
  }
}

module.exports = { reviewSchema, Review };
