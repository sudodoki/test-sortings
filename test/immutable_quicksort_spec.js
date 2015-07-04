var assert = require('assert');
var sort = require('../immutable_quicksort');
var mori = require('mori');
var copy = function (item) {
  return mori.toClj(mori.toJs(item));
};
describe('Mori Quicksort', function () {
  it('should be defined', function () {
    assert.ok(sort);
  });
  it('should be function', function () {
    assert.equal(typeof sort, 'function');
  });
  describe('when called with vector ([3, 1, 2, 4, 5])', function () {
    var result, initialVector;
    beforeEach(function () {
      initialVector = mori.vector.apply(mori, [3, 1, 2, 4, 5]);
      result = sort(initialVector);
    });
    it('should not throw', function () {
      assert.doesNotThrow(sort.bind(null, initialVector));
    });
    it('returns sorted vector ([1, 2, 3, 4, 5] for [3, 1, 2, 4, 5]', function () {
      assert.ok(mori.equals(result, mori.vector(1, 2, 3, 4, 5)));
    });
    it('returns sorted vector ([1, 2, 3, 4, 5, 6] for [3, 1, 2, 6, 4, 5]', function () {
      assert.ok(mori.equals(sort(mori.vector(3, 1, 2, 6, 4, 5)), mori.vector(1, 2, 3, 4, 5, 6)));
    });
  });
});