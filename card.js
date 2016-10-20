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


//console.log(response.results))

// function createResultCard(item) {
//   var card = document.createElement('div')
//   card.classList.add('col-sm-3')
//
//   var cardImage = document.createElement('div')
//   card.appendChild(cardImage)
//   var image = document.createElement('img')
//   image.setAttribute('src', item.Images[0].url_fullxfull)
//   image.classList.add('card')
//   cardImage.appendChild(image)
// //
//   var cardText = document.createElement('div')
//   cardImage.appendChild(cardText)
//   var cardTextP = document.createElement('div')
//   cardText.appendChild(cardTextP)
//   cardTextP.classList.add('overflow-ellipsis')
//   cardTextP.innerHTML = item.title
//   var cardTextLandR = document.createElement('div')
//   cardTextP.appendChild(cardTextLandR)
//
//   var cardTextLeft = document.createElement('div')
//   cardTextLandR.appendChild(cardTextLeft)
//   cardTextLeft.classList.add('text-muted', "col-sm-6", "text-left", 'leftp')
//   cardTextLeft.innerHTML = item.user_id
//
//   var cardTextRight = document.createElement('div')
//   cardTextLandR.appendChild(cardTextRight)
//   cardTextRight.classList.add('text-success', "col-sm-6", "text-right", 'rightp', 'bottomp')
//   cardTextRight.innerHTML = '$' + item.price
//
//
//
//   document.querySelector('#searchResults.row').appendChild(card)
// }
//
//
// createResultCard()


// items.forEach(function(item,i){
//   item.title += i
//   item.image += i
//   item.seller += i
//   createResultCard(item)
// })
// console.log(items)

//// looking at this reminded me of the etsy data that we did to answer our homework from last week.  So I put everything in the array and called it items.  Used the forEach function to loop around the createResultCard.
