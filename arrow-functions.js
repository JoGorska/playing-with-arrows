/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addNumbersVanila (a, b) {
    return a + b
};

let sumVanila = addNumbersVanila (2, 2);

console.log(`sum Vanila javascript ${sumVanila}`)

// Arrow Function With Parameters


const addNumbersArrow = (a, b) => {
    return a + b;
}

let sumArrow = addNumbersArrow(3, 5)
console.log(`sum Arrow function ${sumArrow}`)


// Single Line Arrow Function With Parameters

const addTwoNumbersOneLine = (a, b) => a + b;

let sumOneLine = addTwoNumbersOneLine(5, 10);
console.log(`sum One line arrow function ${sumOneLine}`)

// Implicit Returns

// Returning Multiple Lines
