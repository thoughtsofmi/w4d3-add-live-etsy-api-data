fetch('http://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent('board games') + '&includes=Images,Shop'))
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

// //use button to add event listener
  var button = document.querySelector('#searchbox')
  button.addEventListener('click', search)
//added keypress
var searchInput = document.querySelector('input')
searchInput.addEventListener('keypress', searchEnter)
function searchEnter(event) {
  if (event.key === 'Enter'){
      search()
      }
  }
//adding the function to run the search.  Stuck on this for a while.  Heard James saying that  I needed to fetch the data again for it to pull down to work.  Came home to work on the data and... is giving me an error msg that it can't get data.
  function search() {
          var searchTerm = document.querySelector('#searchResults').value

        fetch('http://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent('searchTerm') + '&includes=Images,Shop'))
        .then(response => response.json())
        .then(response => items(response.results))

        document.querySelector('#searchResults').value = ''//to clear the search bar

    }
