// SOLUTION

var moveZeros = function (arr) {
  let arr1 = arr.filter(a => a !== 0);
  const arr2 = [];
  arr2.length = arr.length - arr1.length;
  arr2.fill(0, 0, arr2.length)
  return arr1.concat(arr2);
}

// PROBLEM

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order
// of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
