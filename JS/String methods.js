const course = "JavaScript 101: coding for beginners"

course.search("coding") //Look for the index of coding will be 16

 course [0] // will give "J" because J is at 0

 course [16] // will give "c" because c is at 16

 course.slice(16,22) // will give coding because its index length 16 till 22

 course.substr(16, 6) // will give coding because, coding starts at 16 and its six char's

 course.replace('coding', 'Programming') // will replace coding for Programming in the string of course

 "JavaScript 101: Programming for beginners" // if you refresh if will disapear because you can not reassign an constant

// for let you can do, course = course.replace('coding','Programming')

course.toLocaleUpperCase() // will give u UpperCase

course.toLocaleLowerCase() // will give u LowerCase

const spacy = "        lots of spaces       "   // user input can give u alot of spaces trim them

spacy.trim() // get rid of the spaces

words = course.split(" ") // (5) ['JavaScript', '101:', 'coding', 'for', 'beginners']
/*
0: "JavaScript"
1: "101:"
2: "coding"
3: "for"
4: "beginners"
length: 5
[[Prototype]]: Array(0
*/

typeof( words) // is an object  but its also  Array

course.length // will give 36 its the length of the string

course[9] // will index at 9 there for gives "t"

course[0] // will index at 0 there for give "J" 

course[36] // undefined there is no 36  its 35 thats 36 because of the 0 index



