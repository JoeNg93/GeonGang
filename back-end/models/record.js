const knex = require('../utils/knex_config');

const recordSchema = `
  type Record {
    id: Int!
    date: String!
    overallScore: Float!
    tag: String!
    moisture: Float!
    dirt: Float!
    uv: Float!
    pigmentation: Float!
  }
`;

class Record {
  constructor(
    id,
    date,
    overallScore,
    tag,
    moisture,
    dirt,
    uv,
    pigmentation,
    userId
  ) {
    this.id = id;
    this.date = date;
    this.overallScore = overallScore;
    this.tag = tag;
    this.moisture = moisture;
    this.dirt = dirt;
    this.uv = uv;
    this.pigmentation = pigmentation;
    this.userId = userId;
  }

  async recommendedProducts() {
    const { Product } = require('./product');
    const products = await knex
      .select('*')
      .from('product_recommended')
      .where('user_id', this.userId)
      .andWhere('record_id', this.id)
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
            row.imgSrc,
            row.category_id,
            row.brand_id
          )
      );
    return products;
  }

  static async getRecordsByUserId({ userId }) {
    const records = await knex
      .select('*')
      .from('record')
      .where('user_id', userId)
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
}
module.exports = { recordSchema, Record };
