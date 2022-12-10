// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5
// below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

const arr1 = 10,
  arr2 = 19,
  arr3 = -2;

//expected solution arr1 is 3 + 5 + 6 + 9 + 10 = 33
// arr2 = 33 + 12 + 15 + 18 + 20 = 98
//arr3 = 0

function multiples(num) {
  if (num <= 0) return 0;

  let arr3 = [],
    arr5 = [],
    numArr = num + 1;

  for (let i = 0; i < numArr; i++) {
    if (i % 3 === 0) {
      arr3.push(i);
    }
    if (i % 5 === 0) {
      arr5.push(i);
    }
  }

  return [...new Set(arr3.concat(arr5))].reduce((a, b) => a + b);
}

console.log(multiples(arr3));
