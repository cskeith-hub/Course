// selecting element by  
/*
const elems = document.querySelector(".this_class");  // const are elements and we document.quertselector this_class
console.log(elems.innerText) // then print elements innerText

document.querySelectorAll(".this_class") // gives nodelist of this_class array
*/
const elements = document.querySelectorAll("li"); // element nodelist [li, li, li]
/*
elements.forEach(node =>{ // for each node index in elements 
    node.innerText = "This is Coding!"; // change node innerText
});
*/

// Node, index

/*
elements.forEach((node, index) => {   // set node and index
    node.innerText = `Hello this is item ${index+1}` // node innertext temp lit  index +1
} )
*/

elements.forEach(node => {
    node.classList.add("custom-class", "second-class"); // adding Classes
});