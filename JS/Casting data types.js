// with casting u can change one data type to an other
/*
age = "31" // age is now 31

typeof(age) // "string"

age * 7 // 217  the browser know its a number

age = "my age is 31" // also a string

age * 7 // NaN Not a Number, the browser does not see a number in string

age ="31"

Number(age)

age = Number(age)

typeof(age) //number

age = Object(age) // makes it an Object 

age = Array(age) // makes it an Array. if some thing is an Object or Array it stays that way

Boolean(31) // True  // every thing that isnt a 0 is True  0 is False


age = 31; // Number

age.replace("1", "3") // will give error cant replace String in a Number

age = String(age)

age.replace("1", "3") // will give 33 it replace 1 with 3
*/



age = prompt(" What is your age?")
age = Number(age);

//typeof(age) // "string"

myage = (age) * 7; // 

console.log ("your age in dog years is " + (age + myage), "years old");










