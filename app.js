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


//  let undefined = 'banana'  // throws error

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

  // console.log(document.body);

  // NOTE pulls a piece of HTML out of DOM
  const userInputElement = document.getElementById('currentUserInput')
  console.log('HTML ELEMENT', userInputElement);

  // NOTE changes innertext inside of HTML element
  userInputElement.innerText = userInput
}

function addCheeseEmoji() {
  userInput += '🧀'

  const userInputElement = document.getElementById('currentUserInput')
  console.log(userInputElement);

  userInputElement.innerText = userInput
}

function addChickenEmoji() {
  userInput += '🍗'

  const userInputElement = document.getElementById('currentUserInput')
  console.log(userInputElement);


  userInputElement.innerText = userInput
}

// NOTE emoji is assigned a value when this function is called. The button elements in my index.html file call this method with an onclick
function addEmoji(emoji) {
  console.log('This is the emoji you supplied when calling this function', emoji);

  userInput += emoji

  drawUserInput()
}

function drawUserInput() {
  const userInputElement = document.getElementById('currentUserInput')
  console.log(userInputElement);

  userInputElement.innerText = userInput
}

function checkIfUserInputMatchesSecretCode() {
  console.log('user input', userInput);
  console.log('secret code', secretCode);

  if (userInput == secretCode) {
    console.log('WINNER');

    const secretVideoElement = document.getElementById('secretVideo')

    // NOTE will read a string of HTML only as a string
    // secretVideoElement.innerText

    secretVideoElement.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/B-yUKS3O66A?si=oKdY70LVsssfvQ8Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  }
  // else if (userInput != secretCode) { }
  else {
    console.log('LOSER');
    userInput = ''
    drawUserInput()
  }
}


// !SECTION