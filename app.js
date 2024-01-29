console.log('JS loaded'); // NOTE good first step to make sure files are talking to each other

// SECTION numbers

let number = 1

let decimal = 2.8

let negativeNumber = -10

const unchangeableNumber = 19

// unchangeableNumber += 3 NOTE throws error

number + 2 // does math, does not change value of number variable

number = number + 2

number += 2

number *= 3

number -= 1

number /= 2

number = number / 2

console.log(number);
// !SECTION

// SECTION booleans

let jeremyAteBreakfast = false

const jeremyLovesCats = true

const mathWorks = 2 == 2 // true

const mathKindOfWorks = 2 == '2' // true

const mathKindOfWorksButNot = 2 === '2' // false

const mathKindOfWorksAgain = 2 === 2 // true

if (mathWorks == true) {
  console.log('Math works!');
}

if (mathWorks) {
  console.log('Math works!');
}

// NOTE truthy falsy gets weird
// number = 0
// if (number) {
//   console.log(number + ' is truthy');
// }
// else {
//   console.log(number + ' is falsey');
// }
// !SECTION

// SECTION strings

let firstName = 'jeremy'

let lastName = 'fowler'

let numberString = '74'

let stringWithSingleQuotes = "I didn't eat breakfast"

let stringWithDoubleQuotes = `Jeremy said "I didn't eat breakfast"`

let multiLineString = `
Hey
Sup
`

console.log(`Number has a value of ${number}`);

console.log('My name is ' + firstName + ' ' + lastName); // concatenation
console.log(`My name is ${firstName} ${lastName}`); // interpolation

// !SECTION

// SECTION weird stuff
let undefinedVariable; // undefined

let thingWithNoValue = null

console.log(`Undefined: ${undefinedVariable}`);
console.log(`No Value: ${thingWithNoValue}`);

// !SECTION

// SECTION functions
function buttonClick() {
  // NOTE message variable lives inside this function only
  const message = 'Great job!'
  console.log('You clicked the button!');
  console.log(message);
}

// console.log(message); NOTE throws error, scoped

const otherWayToWriteFunction = () => { console.log('I am a function!'); }
// !SECTION



// SECTION actual code starts here

// NOTE global variables, accessible to all code underneath
const secretCode = '🍗🍗🥪🧀🥪🧀'
let userInput = ''

function addSandwichEmoji() {
  userInput += '🥪'
  console.log(`You clicked on the 🥪, user input is now ${userInput}`);
}

function addCheeseEmoji() {
  userInput += '🧀'
  console.log(`You clicked on the 🧀, user input is now ${userInput}`);
}


// !SECTION