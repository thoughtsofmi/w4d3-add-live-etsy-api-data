//http://swapi.co/api/planets/1/
//old way
var starwarsPlanets = new XMLHttpRequest()
//clone of that object. to do things with it
starwarsPlanets.addEventListener('load', planetListener)
starwarsPlanets.open('GET', 'http://swapi.co/api/planets/')
starwarsPlanets.send()//actually sends it off

//get page2
var starwarsPlanets = new XMLHttpRequest()
starwarsPlanets.addEventListener('load', planetListener)
starwarsPlanets.open('GET', 'http://swapi.co/api/planets/?page=2')
starwarsPlanets.send()//actually sends it off

function planetListener(){
    var planets = JSON.parse(this.responseText)
    listPlanets(planets.results)
    //console.log(planets.results[2])
}



function listPlanets(planetsArray){
    console.log('This comes after the first one.')

    planetsArray.forEach(function(planet){
        var planetTitle = document.createElement('h4')//make h4
        planetTitle.innerHTML = planet.name//to put the planet name into the h4

        document.querySelector('body').appendChild(planetTitle)//append this to body
    })

}

console.log('This comes first.')
