// SOLUTIONS
function humanReadable(seconds) {
  let date = [];
  date.push(Math.trunc(seconds / 3600));
  date.push(Math.trunc((seconds % 3600 )/ 60));
  date.push(Math.trunc((seconds % 3600 ) % 60 ));
  date = date.map(a => a > 9 ? a : '0' + a)
  parseInt(date[0]) > 99 ? date[0] = '99' : null ;
  return date.join(':');
}

// PROBLEM 

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a
// human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
