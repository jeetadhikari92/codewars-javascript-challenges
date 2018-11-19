// SOLUTION
function accum(s) {
	return Array.from(s).map((r, k) => r.toUpperCase() + r.toLowerCase().repeat(k)).join('-');
}

// PROBLEM 

// The examples below shows how to write function accum:

// Examples:

// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
