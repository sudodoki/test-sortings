var mori = require('mori');

var provide_array = require('./provide_array');
var provide_vector = require('./provide_vector');

var inlineQs = require('./inline_quicksort');
var fpQs = require('./fp_quicksort');
var immutableQuicksort = require('./immutable_quicksort');

var sizes = [10, 100, 1000, 10000, 100000, 100000];
function asNumbers(a, b) {
  return parseInt(a, 10) - parseInt(b, 10);
}
sizes.forEach(function (size) {
  console.log('Sorting array/vector of size %s', size);
  var initialArray0 = provide_array(size);
  var initialArray1 = provide_array(size);
  var initialArray2 = provide_array(size);
  var initialVector = provide_vector(size);
  console.log('Using build in sort()');
  console.time('builtin' + size);
  initialArray0.sort(asNumbers);
  console.timeEnd('builtin' + size);

  console.log('Sorting array inline');
  console.time('inline' + size);
  inlineQs(initialArray1);
  console.timeEnd('inline' + size);

  console.log('Sorting array fp');
  console.time('naive-fp' + size);
  fpQs(initialArray2);
  console.timeEnd('naive-fp' + size);

  console.log('Sorting naїve mori vector');
  console.time('mori-naive' + size);
  immutableQuicksort(initialVector);
  console.timeEnd('mori-naive' + size);

  console.log('Mori built-in sorting for vector');
  console.time('mori-built-in' + size);
  mori.sort(initialVector);
  console.timeEnd('mori-built-in' + size);
});


