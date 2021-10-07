//  array iteration in 2 ways

// for (loops)  and   .forEach (checker)

const arr = ["Zero", "One", "Two", "Three"] // a array with strings in it

/*
for(let i = 0;    // start value 0
    i < arr.length; // as long as i is less then  arr.length
    i ++        // add 1 string
    ){
        console.log(i, arr[i]) // log the i and array [i] index
    }
*/

arr.forEach( num => { // for each number [index] in array
    console.log(num); // log num
})
