/******************
 * lets do sound? *
 ******************/

let myMusic;
myMusic = new sound("assets/audio/PuzzleMusic.mp3");

// may add a checkbox at top of page to play some background music?
const checkbox = document.querySelector("#myCheck");
checkbox.addEventListener("change", (event) => {
  if (event.target.checked) {
    console.log("Music checkbox is checked");
    myMusic.play();
  } else {
    console.log("Music checkbox is not checked");
    myMusic.stop();
  }
});

// sound of dice rolling
let mySound1;
mySound1 = new sound("assets/audio/RollDice2.mp3");

// sound handling function
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
}

// lets do the dice roller
const allRolls = document.querySelector("#all-rolls");
const diceTotal = document.querySelector("#dice-total");
const rollDice = document.querySelector("#roll-dice");
let showDice = document.querySelector("#show-dice");

// Create a user input box, where a user can specify the number of sides on the dice
const numSides = document.querySelector("#num-sides");
const resetButton = document.querySelector("#reset-button");

let iRandomNumber;
// where X is the number from the text input box. X is also the number of times you will loop.
let X;
let numDice = X;
let i = 1;
//create a variable named dieRolls
let dieRolls = [];
let sum = 0;

/**********************
 * lets roll the dice *
 **********************/

// event listener for roll button
rollDice.addEventListener("click", function () {
  // get the value from the text input box, so that you know how many dice to roll
  // then assign it to the event listener
  X = document.querySelector("#num-dice");
  event.preventDefault();
  diceTotal.innerHTML = "";
  dieRolls = [];
  i = 1;
  sum = 0;

  while (i <= Number(X.value)) {
    iRandomNumber = Math.ceil(Math.random() * Number(numSides.value));

    // Push the result of each roll onto your dieRolls array
    dieRolls.push(iRandomNumber);
    console.log(dieRolls);
    i++;
  }

  // Sum all your dice rolls
  sum = dieRolls.reduce((a, b) => a + b, 0);
  console.log(sum);

  // display the result in the Total area on the page using innerHTML
  diceTotal.innerHTML += "Total: " + "</br>" + sum;
  mySound1.play();
});

/****************************
 * lets show the dice rolls *
 ****************************/

// Add a click event listener to your "Show All Rolls" button
showDice.addEventListener("click", function () {
  showDice = document.querySelector("#show-dice");
  event.preventDefault();
  allRolls.innerHTML = "";

  // Loop over the dieRolls array
  let count = 0;
  while (count < dieRolls.length) {
    // creating a new List Item for each number and adding that List Item to the innerHTML of the "All Rolls" element
    allRolls.innerHTML += "</br>" + "<li>" + dieRolls[count] + "</li>";
    console.log(dieRolls[count]);
    count++;
  }
  mySound1.play();
});

/********************************
 * lets handle the reset button *
 ********************************/

// Create a reset button which, on click, will empty the array and the innerHTML of your Total and All Rolls elements.
resetButton.addEventListener("click", function () {
  resetButton = document.querySelector("#reset-button");
  event.preventDefault();

  // reset the entire form including dieRolls array, and innerHTML of total and All Rolls elements
  dieRolls = [];
  diceTotal.innerHTML = "";
  allRolls.innerHTML = "";
  checkbox = document.querySelector("#myCheck");
  checkbox.checked = false;
});
