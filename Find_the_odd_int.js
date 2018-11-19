// SOLUTION
function findOdd(A) {
  let i = [];
  let count;
  A.forEach(a => i.indexOf(a) === -1 ? i.push(a): '');
  
  return (i.map(n => {
            count = 0;
            A.forEach(a => {
              if(a === n) {
                count++;
              }
            })
            return {num: n, cnt: count};
          })).filter(a => a.cnt % 2 !== 0)[0].num;    
}

// PROBLEM

// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
