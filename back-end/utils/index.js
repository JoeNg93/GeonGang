const _ = require('lodash');

const toCamelCaseKey = objWithSnakeCaseKey =>
  _.mapKeys(objWithSnakeCaseKey, (value, key) => _.camelCase(key));

module.exports = { toCamelCaseKey };
