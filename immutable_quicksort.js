var mori = require('mori');
function quicksort(vector) {
    if (mori.count(vector) <= 1) {return vector; }
    var randomIndex = Math.floor(Math.random() * mori.count(vector));
        // selecting pivot
    var pivot = mori.nth(vector, randomIndex),
        // getting all the elements which are less than pivot
        // - cheating here assuming distinct elements
        lesserHalf = quicksort(mori.filter(function(el){return el < pivot; }, vector)),
        // getting all the elements which are bigger than pivot
        biggerHalf = quicksort(mori.filter(function(el){return el > pivot; }, vector));
        return  mori.concat(lesserHalf, mori.vector(pivot), biggerHalf);
}
module.exports = quicksort;