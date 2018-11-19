// SOLUTION 1
function anagrams(word, words) {
  return words.filter((d) => word.split('').sort().join() === d.split('').sort().join());
}

// SOLUTION 2 (Same as SOLUTION 1 but Better Readability)
function anagrams(word, words) {
  function checkIfSame(a, b) {
  	return a.split('').sort().join() === b.split('').sort().join();
  }
  return words.filter((d) => checkIfSame(word, d));
}

// PROBLEM 

// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
// 'abba' & 'baab' == true
// 'abba' & 'bbaa' == true
// 'abba' & 'abbba' == false
// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. 
// You will be given two inputs a word and an array with words.
// You should return an array of all the anagrams or an empty array if there are none.
// For example:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
