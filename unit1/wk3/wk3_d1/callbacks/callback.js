// let numsArray = [3, 12, 15, 27]

// numsArray.forEach(function(num)) {
//   console.log(num)
// } //(another way to write this code)

// numsArray.forEach(num => {
//   console.log(num);
// });

let deck = []
let suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs']
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
// let values = [];

for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < values.length; j++) deck.push(`${values[j]}${suits[i]}`)
}

// console.log(deck)

// suits.map(suit => ) {
//   values.map(value => {
//     deck.push(`${value}${suit}`)
//   })
// }

// console.log(deck)

// function randomCard(arr) {
//   let randomNumber = Math.floor(Math.random * deck.length);
//   let randomCard = deck[randomNumber];
//   myDiv.innerHTML = randomCard
// }
// classwork:

const cars = [
  { make: 'Toyota', yrsOld: 5, mileage: 92399 },
  { make: 'Ford', yrsOld: 12, mileage: 255005 },
  { make: 'Ferrari', yrsOld: 9, mileage: 12966 },
  { make: 'Subaru', yrsOld: 9, mileage: 111266 },
  { make: 'Toyota', yrsOld: 2, mileage: 41888 },
  { make: 'Tesla', yrsOld: 3, mileage: 57720 }
]
