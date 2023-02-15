// let duke = {
//   name: "Duke",
//   breed: "Havanese",
//   age: 2,
// hyper: true,
// bark() {
//   console.log("Yelp! I'm barking")
// },
// playWithSister() {
//   console.log(I love playing with Emily!)
// }
// }

// console.log(duke);
// duke.bark();

class Person {
  constructor(
    name,
    age,
    hairColor,
    height,
    weight,
    ethnicity,
    favNumber,
    favIceCream,
    favColor,
    ssn,
    arms = 2,
    legs = 2
  ) {
    ;(this.name = name),
      (this.age = age),
      (this.hairColor = hairColor),
      (this.height = height),
      (this.weight = weight),
      (this.ethnicity = ethnicity),
      (this.favNumber = favNumber),
      (this.favIceCream = favIceCream),
      (this.favColor = favColor),
      (this.ssn = ssn),
      (this.arms = arms),
      (this.name = name),
      (this.legs = legs)
  }
  greet() {
    console.log('Hello')
  }
  gotOlder() {
    this.age++ //this is adding 1 to the age
  }
  hop() {
    console.log("I'm making a small jump as a puny human")
  }
}

let eric = new Person(
  'Eric',
  37,
  'black',
  78,
  200,
  'White',
  25,
  'Strawberry',
  'Blue for Duke',
  8675309
)
console.log(eric)

let sergii = new Person('Sergii', 20, 'black')
console.log(sergii)
sergii.gotOlder()

eric.greet()
eric.gotOlder()
eric.hairColor = 'Purple'
eric.nonsense = 'His posts in partytime' //this adds a new classification to the original list (?)

console.log(eric)
console.log(sergii)

eric.addNonsense()
eric.nonsense = 'His posts in partytime'
console.log(eric)

class SuperHero extends Person {
  //constructor alias

  fly() {
    console.log('Up up and away!')
  }
  greet(otherPerson) {
    console.log('Greetings ' + otherPerson)
  }
  jump() {
    super.hop()
    this.fly()
  }
}

const superman = new SuperHero('Clark Kent', 30, 'blue', 'black')
superman.hop()

//need to go back and look at this...its missing something.
