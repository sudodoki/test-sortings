var assert = require('assert');
var sort = require('../inline_quicksort');
var copy = function (item) {
  return JSON.parse(JSON.stringify(item));
};
describe('Inline Quicksort', function () {
  it('should be defined', function () {
    assert.ok(sort);
  });
  it('should be function', function () {
    assert.equal(typeof sort, 'function');
  });
  describe('when called with array ([3, 1, 2])', function () {
    var result, initialArray;
    beforeEach(function () {
      initialArray = [3, 1, 2]
      result = copy(initialArray)
      sort(result);
    });
    it('should not throw', function () {
      assert.doesNotThrow(sort.bind(null, [3, 1, 2]));
    });
    it('returns sorted array ([1, 2, 3] for [3, 1, 2]', function () {
      assert.deepEqual(result, [1, 2, 3]);
    });
  });
});