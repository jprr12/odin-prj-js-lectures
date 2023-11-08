// // js strings
// var singleQteStr = 'world';
// var dblQteStr = "diz eez ze vey";

// // template literal - strings declared using backticks
// // JS code can be embedded in template liteerals
// var someName = "john doe"
// var backtickStr = `hello ${someName}`;

// // concatenation using template literal and +
// const btnSurprise = document.querySelector("button");
// function surprise() {
//     const name = prompt("What is your name?");
//     const greeting = document.querySelector("#surprise");
//     greeting.innerHTML = `Hello ${name}! Surprise!`;
//     greeting.textContent = "Hello " + name + "! Surprise!";
// }
// btnSurprise.addEventListener('click', surprise);

// // embedding javascript in template literals
// const btn2 = document.querySelector("button");
// function interview() {
//     const name = prompt("What is your name?");
//     const age = prompt("What is your age in years?");
//     document.querySelector("div").textContent = `Hello ${name}! You are exactly ${age * 12} months old.`;
// }
// btn2.addEventListener('click', interview);

// ==================================================================
// conditionals
// btn = document.querySelector("button");
// function compare() {
//     const txt = document.querySelector("div");
//     const num = 18;
//     const userInput = prompt("Enter a number");
//     if (userInput > num) {
//         txt.textContent = `${userInput} is greater than ${num}`;
//     } else if (userInput < num) {
//         txt.textContent = `${userInput} is less than ${num}`;
//     } else {
//         txt.textContent = `${userInput} is equal to ${num}`;
//     }
// }
// btn.addEventListener('click', compare);

// // logical operators
// // or ||, and &&, not !, nullish coalescing ??
// btn3 = document.querySelector("button");
// function calculate() {
//     const num = 10;
//     const txt = document.querySelector("div");
//     const userNum = prompt("Enter a number");
//     if (userNum > num || userNum < num) {
//         txt.textContent = "Nope";
//     } else{
//         txt.textContent = "Yerp";
//     }
// }
// btn3.addEventListener('click', calculate);

// const select = document.querySelector("select");
// const pTxt = document.querySelector("#experience");
// select.addEventListener('change', setExp);
// function setExp() {
//     const choice = select.value;
//     if (choice === "beginner") {
//         pTxt.textContent = "You are a beginner.";
//     } else if (choice === "advanced") {
//         pTxt.textContent = "You are advanced.";
//     } else if (choice === "intermediate") {
//         pTxt.textContent = "You are intermediate.";
//     } else if (choice === "expert") {
//         pTxt.textContent = "You are an expert.";
//     } else if (choice === "professional") {
//         pTxt.textContent = "You are a professional.";
//     } else {
//         pTxt.textContent = "";
//     }
// }

// // switch statements
// // turning setExp() to switch
// function setExp() {
//     const choice = select.value;
//     switch (choice) {
//         case "beginner":
//             pTxt.textContent = "You are a beginner.";
//             break;
//         case "advanced":
//             pTxt.textContent = "You are advanced.";
//             break;
//         case "intermediate":
//             pTxt.textContent = "You are intermediate.";
//             break;
//         case "expert":
//             pTxt.textContent = "You are an expert.";
//             break;
//         case "professional":
//             pTxt.textContent = "You are a professional.";
//             break;
//         default:
//             pTxt.textContent = "sample text";
//     }
// }

// ternary operator
// can only be used in situations with two conditions
// const a = prompt("Enter a number");
// const result = (a%2 === 0) ? (a == 0 ? "zero" : "even") : "odd";    
// const txt = document.querySelector("p");
// txt.textContent = result;

// const select = document.querySelector("select");
// const txt = document.querySelector("p");
// txt.style.width = "fit-content";
// txt.style.padding = "8px";
// txt.style.fontSize = "2rem";
// function update(bgColor, txtColor) {
//     txt.style.backgroundColor = bgColor;
//     txt.style.color = txtColor;
// }
// select.addEventListener('change', () => {
//     select.value === "white" ? update("black", "white") : update("white", "black");
// })

// ==================================================================
// javascript functions
// anonymous function
// const txtBox = document.querySelector("textarea");
// txtBox.addEventListener("keydown", function(event){
//     console.log(event.key);
// })

// arrow function
// if function takes only one parameter, parenthesis can be omitted
// txtBox.addEventListener("keydown", (event) => {
//     console.log(`Keypress: ${event.key}`);
// })

// if function containes only one line that is a return statement, do this
// const list = [1, 2, 3];
// function hello() {
//     return "hello world!";
// }
// const hi = list.map(hello);

// ==================================================================
// // function scope and conflicts
// function capitalize(str) {
//     return str[0].toUpperCase() + str.slice(1).toLowerCase();
// }
// function lastLetter(str) {
//     return str[str.length-1];
// }

// ==================================================================
// understanding errors
// reference errors - when a variable that is not yet initialized/defined is referenced in the code
// syntax errors - spelling errors, misplaced articles, etc
// logic errors - syntax is correct but code gives incorrect results

// ==================================================================
// // arrays
// const cars = ["Lamborghini", "Ford", "Ferrari"];

// // looping through arrays
// for (var i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// // array elements can be objects/functions
// function sayHi() {
//     return "hi";
// }
// function eatVeggies() {
//     return "veggies eaten";
// }
// const someArray = [sayHi, 'and', eatVeggies];

// // length property
// cars.length

// // first and last array element
// cars[0];
// cars[cars.length-1];

// // adding array elements
// cars.push("Porsche");

// ==================================================================
// // other array methods
// var colors = ['green', 'yellow', 'blue', 'red', 'orange'];

// // pop - removes last element
// colors.pop();

// // shift - removes first element then shifts other elements to a lower index
// colors.shift();

// // unshift - adds an element at the beginning of an array then shifts other elements
// colors.unshift("pink");

// // changing elements
// colors[1] = "black";

// // concatenating arrays
// var newColors = ['aquamarine', 'peach', 'lavander'];
// var letters = ['a','s','d','f','j','k','l'];
// var colorSet = colors.concat(newColors);
// var mixColorLetter = colors.concat(newColors, letters);

// // flattening arrays - turns complex arrays into 1-dimensional array
// var numbers = [[1,2,['a','s',2]],[3,4],[5,6]];
// numbers.flat();

// // splice - adds/removes item to an array
// letters.splice(2, 0, 'q', 'w');
// letters.splice(2, 2);

// // slice - extracts a portion of an array and returns a new array
// var newLetters = letters.slice(1,3);
// var newLetters2 = letters.slice(3);

// ==================================================================
// // sorting arrays
// const letters = ['q','w','e','r','t','y','u','i','o','p'];

// // sort() sorts an array alphabetically
// const sortedLetters = letters.sort();

// // reverse() reverses the elements in an array
// const reversedLetters = letters.reverse();

// // numeric sort
// const numbers = [99, 13, 1, 21, 45, 100, 87];
// // sort in ascending order
// const sortedNumbers = numbers.sort(function(a,b){return a-b});
// // sort in descending order
// const descendingNumbers = numbers.sort(function(a,b){return b-a});

// // compare function - sort() method sends the values to the compare function when sorting
// // function(a,b){return a-b};

// // random sort
// const rndSorted = numbers.sort(function(){return 0.5 * Math.random()});

// // fisher yates shuffle method - more readings
// for (var i = numbers.length-1; i>0; i--) {
//     var j = Math.floor(Math.random() * (i+1));
//     var k = numbers[i];
//     numbers[i] = numbers[j];
//     numbers[j] = k;
// }

// // finding max/min values in an array
// // no such method; arrange array to ascending/descending order using compare function
// // or use Math.max.apply() / Math.min.apply()
// function getMax(arr) {
//     return Math.max.apply(null, arr);
// }
// function getMin(arr) {
//     return Math.min.apply(null, arr);
// }
// const maxNumFromArr = Math.max.apply(null, arr);
// const minNumFromArr = Math.min.apply(null, arr);

// // sorting object arrays - arrays containing objects
// const boxOffice = [
//     {movie: "The Bee Movie", rating: 2.4},
//     {movie: "Inception", rating: 9.4},
//     {movie: "White Chicks", rating: 10.0}
// ]
// // sorting by numbered property
// const sortByRating = boxOffice.sort(function(a,b){return a.rating - b.rating});
// // sorting by unnumbered property
// const sortByLetter = boxOffice.sort(function(a,b){
//     let x = a.movie.toLowerCase();
//     let y = b.movie.toLowerCase();
//     if (x<y) {return -1};
//     if (x>y) {return 1};
//     return 0;
// })

// ==================================================================
// loops
const numbers = [45, 99, 1, 12, 27, 82, 16];
const letters = ['q','w','e','r','t','y'];

// for-of
for (const num of numbers) {
    console.log(num);
}

// map()
function revelio(num) {return console.log(num);}
function doubleNum(num) {return num*2;}
numbers.map(revelio);
numbers.map(doubleNum);
function toUpper(letter) {return letter.toUpperCase();}
letters.map(toUpper);

// filter()
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
function lCat(cat) {return cat.startsWith("L");}
cats.filter(lCat);

// standard for loop
for (var i = 0; i < 5; i++) {
    console.log(i);
}

// exiting loops with 'break'
// skipping iterations with 'continue'

// while
var counter = 0;
while(counter < 5) {
    console.log("hello");
    counter++;
}

// do-while
const newNumbers = [];
var counter = 0;
do {
    newNumbers.push(counter);
    counter++;
} while (counter <= 10);

// filling in a guest list with loop
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
const admitted = "Admited: ";
const refused = "Refused: ";
for (const name of people) {
    if (name === "Phil" || name === "Lola") {
        refused += `${name}, `;
    }
    admitted += `${name}, `;
}