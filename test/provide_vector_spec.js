var assert = require("assert");
var provideVector = require('../provide_vector');
var mori = require('mori');

describe('provideVector', function () {
  it('should be defined', function () {
    assert.ok(provideVector);
  });
  it('should be function', function () {
    assert.equal(typeof provideVector, 'function');
  });
  describe('when called with number n (n = 10)', function () {
    var result;
    beforeEach(function () {
      result = provideVector(10);
    });
    it('should return vector', function () {
      assert.equal(mori.isVector(result), true);
    });
    describe('vector returned should be', function () {
      it('of length n (10)', function () {
        assert.equal(mori.count(result), 10);
      });
      it('of elements from 1 to n (1 to 10)', function () {
        function asNumbers(a, b) {
          return parseInt(a, 10) - parseInt(b, 10);
        }
        assert.deepEqual(mori.toJs(result).sort(asNumbers), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      });
    });
  });
});