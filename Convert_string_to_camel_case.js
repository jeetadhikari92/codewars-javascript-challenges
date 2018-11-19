// SOLUTION
function toCamelCase(str){
   return str.split(/-|_/gi).reduce((a, c) => a + (c[0].toUpperCase() + c.substr(1)));
}

// PROBLEM

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized.

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
