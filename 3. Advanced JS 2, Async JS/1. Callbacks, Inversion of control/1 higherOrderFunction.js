// higher order function -> there are functions which take another function as arguments
// these are called higher order functions

function func(x, fn) {
  // func is a high order function
  /**
   * x -> number
   * fn -> function
   */
  console.log(x);
  console.log(fn);
  fn();
}

func(10, function exec() {
  console.log("I am an expression passed to a HOF");
});

let arr = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3]; // unsorted array

arr.sort(); // it sorts the given array // [expectation] -> this might arrange elements in inc order
// default implementation of arr.sort() is going to sort my array in lexicographical order
/**
 * 0 -> A
 * 1 -> B
 * 2 -> C
 * 3 -> D
 * 4 -> E
 * 5 -> F
 * 6 -> G
 * 7 -> H
 * 8 -> I
 * 9 -> J
 * ....
 * [B, BA, J, BAA, BAAA, BB, BC, BD, BE, C, D] // if we arrange it according to dictionary
 * [B, BA, BAA, BAAA, BB, BC, BD .....]
 */
console.log(arr);

let b = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3];

// sort b in increasing order

b.sort(function cmp(a, b) {
  // if a < b -> a - b will be negative -> if cmp function gives negative then a is placed before b (a<b)
  // if a > b -> a - b will be positive -> if cmp function gives positive then b is placed before a (a>b)
  return b - a; //descending sorting order
}); // sort is a HOF ,, the sort function takes a comparator function as argument

console.log(b);

// Worst sorting algorithm
// sorting is arranging elements in a particular manner or order. order need not to be ascending order, it can be in any order. Arranging element in some order is what, permutation or calculating permutations.

//if we have an array, and we want to sort them in a particular manner, how we are going to generate all permutation, then the complexity will be n!. This is the worst sorting algorithm.
