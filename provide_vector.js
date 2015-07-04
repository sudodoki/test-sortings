var mori = require('mori');
var provideArray = require('./provide_array');
module.exports = function (size) {
  return mori.vector.apply(mori, provideArray(size));
};