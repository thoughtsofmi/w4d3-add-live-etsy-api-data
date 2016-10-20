var searchTerm
fetchRequest()

document.getElementById('search').addEventListener('keypress', searchEnter)//added my search event listener for the box
document.getElementById('searchButton').addEventListener('click', search) //added search event listener for the button

//function to run when you keypress enter on the keyboard
function searchEnter(event) {
  if (event.key === 'Enter'){
      search()
    }
}

function search(){
  searchTerm = document.getElementById('search').value
  document.getElementById('searchResults').innerHTML = ''
  fetchRequest()
}// made a function search to connect to the function

//originally had items in the fetch request.  not passing anything in there
function fetchRequest(){
 fetch('https://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent(searchTerm) + '&includes=Images,Shop'))

.then(response => response.json())
.then(function(items){
items.results.forEach(function(item){
  var card = document.createElement('div')
  card.classList.add('col-sm-3')

  var cardImage = document.createElement('div')
  card.appendChild(cardImage)
  var image = document.createElement('img')
  image.setAttribute('src', item.Images[0].url_fullxfull)
  image.classList.add('card', 'imageheight')
  cardImage.appendChild(image)
//
  var cardText = document.createElement('div')
  cardImage.appendChild(cardText)
  var cardTextP = document.createElement('div')
  cardText.appendChild(cardTextP)
  cardTextP.classList.add('overflow-ellipsis')
  cardTextP.innerHTML = item.title
  var cardTextLandR = document.createElement('div')
  cardTextP.appendChild(cardTextLandR)

  var cardTextLeft = document.createElement('div')
  cardTextLandR.appendChild(cardTextLeft)
  cardTextLeft.classList.add('text-muted', "col-sm-6", "text-left", 'leftp')
  cardTextLeft.innerHTML = item.user_id

  var cardTextRight = document.createElement('div')
  cardTextLandR.appendChild(cardTextRight)
  cardTextRight.classList.add('text-success', "col-sm-6", "text-right", 'rightp', 'bottomp')
  cardTextRight.innerHTML = '$' + item.price


  document.querySelector('#searchResults.row').appendChild(card)
})
})
}
