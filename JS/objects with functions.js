
// writing a function in an object

const person = {
    "name" : "Colin",
    "age"  : 30,
    "height" : 1.93,   // here is a person object 
    "speak" : function(nice = "have a nice day") { // he has a function speak with var
        console.log(`Hello there Welcome ${nice}`); // person.speak()
    }, 
    
    // object litteral
    talk( to= "eva"){  // same as "speak" : function()
       console.log(`I am talking to ${to}`) // person.talk()
    }


}


//person.speak("Guest")

//console.log(person["name"])



