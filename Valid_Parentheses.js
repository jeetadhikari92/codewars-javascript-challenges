// SOLUTION 
function validParentheses(parens){
  if(parens.length > 0){
    const bracArr = parens.split('');
    const startBracArr = bracArr.filter( a => a === '(' );
    return (startBracArr.length === (bracArr.length - startBracArr.length)) 
        && (bracArr[0] === '(' )
        && (bracArr[bracArr.length - 1] === ')');
  }
  return true; 
}

// PROBLEM 

// Write a function called that takes a string of parentheses, and determines if the
// order of the parentheses is valid. The function should return true if the string is valid,
// and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100
