// **Prompt**: Given an array of integers, find the sum of its elements.

// For example an array of [1,2,3] will be ran as 1 + 2 + 3 for a total return of 6.

// Example Input:

// # **Function Description**

// The function should be called `simpleArraySum` and have the following parameter(s):

// - *ar*: an array of integers

// # **Input Format**

// Input will be an array of integers.

// # **Output Format**

// Return the sum of the array's elements as a single integer.

const arr = [1, 2, 3] //this is actually not needed here.. I left this in but see L35.

function simpleArraySum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

console.log(simpleArraySum(arr)) //expects 6
console.log(simpleArraySum([1, 2, 3])) //exepects 6
console.log(simpleArraySum([4, 12, 3])) //exepects 19

// console.log(simpleArraySum[4, 12, 3]) //Expects 19

// Multiples of 3 or 5

// Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

function multiples() {
  let sum = 0
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum
}
console.log(multiples())

// OR this works if you want to use a different or multiple value:
function multiplestwo(num) {
  let sum = 0
  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum
}
console.log(multiplestwo(100))
console.log(multiplestwo(1000))

//       The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

// function factor(num1, num2) {
//   if (num1 % num2 === 0) return true;
//   return false;
// }

// function prime(num) {
//   for (let i = 2; i <= Math.sqrt(num); i++)
// }

// Eric's code:
// function factor(num1, num2) {
//   if(num1 % num2 === 0) return true;
//   return false;
// }

// function prime(num) {

// }

// function largestPrimeFactor(num) {
//   for(let i = num; i > 0; i++) {
//       if(factor(num, i) && prime(num)) return i;
//   }
// }

// console.log(largestPrimeFactor(13195))
