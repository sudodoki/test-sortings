function quicksort(array) {
    // to dereference initial array
    var copy = JSON.parse(JSON.stringify(array));
    if (copy.length <= 1) {return copy; }
    var randomIndex = Math.floor(Math.random() * copy.length),
        // selecting pivot & removing it from initial array
        pivot = copy.splice(randomIndex, 1),
        // getting all the elements which are less than / equal to pivot
        lesserHalf = copy.filter(function(el){return el <= pivot; });
        // getting all the elements which are bigger than pivot
        biggerHalf = copy.filter(function(el){return el > pivot; });
    // I would love to hear why this wouldn't work withoug closure
    return (function (lesserHalf, pivot, biggerHalf) {
      return [].concat(quicksort(lesserHalf), pivot, quicksort(biggerHalf));
    })(lesserHalf, pivot, biggerHalf);
}
module.exports = quicksort;