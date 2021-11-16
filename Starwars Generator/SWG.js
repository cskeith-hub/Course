const name = document.getElementById("name")
const gender = document.getElementById("gender")
const species = document.getElementById("species")
const home = document.getElementById("home")
const cybernetics = document.getElementById("cybernetics")
const img = document.getElementById("photo")




const button = document.querySelector(".button");
button.addEventListener('click', (e) => {
    e.preventDefault()
         name.innerHTML = '<em>Loading...<em>'
         gender.innerHTML = '<em>Loading...<em>'
         species.innerHTML = '<em>Loading...<em>'
         home.innerHTML = '<em>Loading...<em>'
         cybernetics.innerHTML = '<em>Loading...<em>'
         img.innerHTML = '<em>Loading...<em>'

    const randomNumber = Math.ceil(Math.random() *87)
    fetch(`https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`)
      .then(response => response.json())
      .then(character => {
           console.log(character)
         name.innerHTML = character['name']
         gender.innerHTML = character['gender']
         species.innerHTML = character['species']
         home.innerHTML = character['homeworld']
         cybernetics.innerHTML = character['cybernetics']
         img.innerHTML = `<img src=${character.image} alt="pic" style="width:200px;height:350px">`
         
    })
}) 
