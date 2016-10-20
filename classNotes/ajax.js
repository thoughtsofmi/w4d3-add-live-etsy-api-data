//http://swapi.co/api/planets/1/
//
// var starwarsPlanets = new XMLHttpRequest()
// //clone of that object. to do things with it
// starwarsPlanets.addEventListener('load', planetListener)
// starwarsPlanets.open('GET', 'http://swapi.co/api/planets/')
// starwarsPlanets.send()//actually sends it off
//
// //get page2
// var starwarsPlanets = new XMLHttpRequest()
// starwarsPlanets.addEventListener('load', planetListener)
// starwarsPlanets.open('GET', 'http://swapi.co/api/planets/?page=2')
// starwarsPlanets.send()//actually sends it off

// function planetListener(){
//     var planets = JSON.parse(this.responseText)
//     listPlanets(planets.results)
//     //console.log(planets.results[2])
// }

//new way.  fetch!!!
fetch('http://swapi.co/api/planets/')//connection
    .then(response => response.json())//common. boiling point. take the raw response and parse it into json.  fetch has it built in that we don't have to parse it. send the out put and pass it
    .then(response => listPlanets(response.results))
    //after the promise.  then and then.

fetch('http://swapi.co/api/planets/1/')
    .then(response => response.json())
    .then(response => listPlanet(response))

        //console.log(response))


        //


    ///same thing as the upper two codes
    // .then(function(response){
    //     return repsonse.json()
    // })
    // .then(function(responseJson){
    // listPlanets(responseJson)
    // })


function listPlanets(planetsArray){
    //console.log('This comes after the first one.')
    planetsArray.forEach(function(planet){
        var planetTitle = document.createElement('h4')//make h4
        planetTitle.innerHTML = planet.name//to put the planet name into the h4
        document.querySelector('body').appendChild(planetTitle)//append this to body
    })
}

function listPlanet(planet){
    //console.log(planet)
    var list = document.createElement('ul')
    var planetName = document.createElement('li')
    planetName.innerHTML = planet.name
    list.appendChild(planetName)
    var planetGravity = document.createElement('li')
    planetGravity.innerHTML = planet.gravity
    list.appendChild(planetGravity)
    var planetPopulation = document.createElement('li')
    planetPopulation.innerHTML = planet.population
    list.appendChild(planetPopulation)

    document.querySelector('body').appendChild(list)
}
//console.log('This comes first.')

// select search button and add event listener
var searchButton = document.querySelector('#search')
searchButton.addEventListener('click', search)

// select search input and add event listener
var searchInput = document.querySelector('#search_bar')
searchInput.addEventListener('keypress', searchEnter)

// create search function that clears the previous serach results and replaces them with the search results generated from the input value being placed at the end of the URL
function search() {
    document.querySelector('#searchResults').innerHTML = ''
    var searchTerm = document.querySelector('#search_input').value

    fetch('http://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent(searchTerm) + '&includes=Images,Shop'))
        .then(response => response.json())
        .then(response => createResultCard(response.results))
}

function searchEnter(event) {
    if (event.key === 'Enter') {
        search()
    }
}
