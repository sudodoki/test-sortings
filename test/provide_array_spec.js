var assert = require("assert");
var provideArray = require('../provide_array');
describe('provide_array', function(){
  it('should be defined', function () {
    assert.ok(provideArray);
  });
  it('should be function', function () {
    assert.equal(typeof provideArray, 'function');
  });
  describe('when called with number n (n = 10)', function () {
    var result = provideArray(10);
    beforeEach(function () {
      result = provideArray(10);
    });
    describe('should return array', function () {
      it('of length n (10)', function () {
        assert.equal(result.length, 10);
      });
      it('of elements from 1 to n (1 to 10)', function () {
        function asNumbers(a, b) {
          return parseInt(a, 10) - parseInt(b, 10);
        }
        assert.deepEqual(result.sort(asNumbers), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      });
    });
  });
});