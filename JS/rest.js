// in a function u can put a rest ... to take a unlimited number of parameters
/*
function addNumbers(...numbers) {   // ... rest numbers is the array where u can loop trough
 for(index in numbers) { 
     console.log(index); // log the index
     console.log(numbers[index]) // log numbers and index
 }
}

addNumbers(1, 4, 7, 13) // will give u  0 1 2 3  and 1 4 7 13
*/

function addNumbers(greetingName, ...numbers){
    let total = 0;
    for(index in numbers){
        total = total + numbers[index];
    }
    return `${greetingName}: the total is ${total}`;
}

const newTotal = addNumbers("Colin", 1,3,204);
console.log(newTotal);