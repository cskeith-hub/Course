// Dont Repeat Yourself Functions()

/*
const age = 31;

if(age >= 18) { // if greather or equal to
   console.log(`u are ${age} old, u can vote!`) // cons log temp lit
}
if(age >= 21) {
   console.log(`u are ${age} old, u can drink alcoholz!`)
}

const secondAge = 15;
if(secondAge <= 18) { // if lesser or equal to
    console.log(`u are ${secondAge} u cant vote!`) // cant vote
}
if( secondAge <= 21) {
    console.log(`u are ${secondAge} u cant drink alcoholz!`)
    
}
*/

/*

function addNumbers() {
    //logic 
    return "an answer";
}
*/


// Re use Code

function addNumbers(num1, num2) {  // function name parrameter
    const total = Number(num1)+ Number(num2); //  name  parrameter + parrameter
    return total; 
    
}

const addedTotal = addNumbers(1, 9);  // name = function num1 + num2 

function greeting(name) {
    console.log(`Hello ${name}`);
}

typeof(addNumbers); // function

typeof(addNumbers(1, 9)); // number because its executing a number

