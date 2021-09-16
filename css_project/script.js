function addNumbers(greetingName, ...numbers) {
    let total = 0;
    for(index in numbers) {
        total = total + numbers[index];
    }

    return `${greetingName} : the total is ${total}`;
}
const newTotal = addNumbers("Colin", 1  , 4, 7, 213);
console.log(newTotal);