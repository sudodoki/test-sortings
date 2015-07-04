var shuffle = require('lodash/collection/shuffle');
var range = require('lodash/utility/range');

module.exports = function (min, max) {
  return JSON.parse(JSON.stringify(shuffle(range(min, max))));
};
