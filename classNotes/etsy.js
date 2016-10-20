/*
<div class="col-sm-3">
    <div class="card">
        <img src="http://unsplash.it/200?random" />
        <span>Title of thing goes here and it's a long title with a lot of words.</span><br />
        <div class="row">
          <div class="col-xs-6 text-muted">
            sellername
          </div>
          <div class="col-xs-6 text-right text-success">
            $75.00
          </div>
        </div>
    </div>
</div>
*/

// Events
document.getElementById('search').addEventListener('keypress', searchEnter)
document.getElementById('searchBtn').addEventListener('click', search)

function createResultCard(item) {
    var col = document.createElement('div')
    col.className = 'col-sm-3'

    var card = document.createElement('div')
    card.className = 'card'
    col.appendChild(card)

    var img = document.createElement('img')
    img.setAttribute('src', item.Images[0].url_170x135)
    card.appendChild(img)

    var span = document.createElement('span')
    span.innerHTML = item.title
    card.appendChild(span)

    var row = document.createElement('div')
    row.className = 'row'
    card.appendChild(row)

    var colLeft = document.createElement('div')
    colLeft.className = 'col-xs-6 text-muted'
    colLeft.innerHTML = item.Shop.shop_name
    row.appendChild(colLeft)

    var colRight = document.createElement('div')
    colRight.className = 'col-xs-6 text-right text-success'
    colRight.innerHTML = item.price
    row.appendChild(colRight)

    document.querySelector('#searchResults').appendChild(col)
}

function makeCards(cardItems) {
    document.querySelector('#searchResults').innerHTML = ''

    cardItems.forEach(function(item, i) {
        createResultCard(item)
    })
}

function search() {
    // get search term from search input box
    var searchTerm = document.getElementById('search').value

    // clear search input field
    document.getElementById('search').value = ''

    // set a default search term if input was empty
    if (searchTerm === '') {
        searchTerm = 'vintage comic books'
    }

    // get the api data
    fetch('https://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent(searchTerm) + '&includes=Images,Shop'))
        .then(response => response.json())
        .then(data => makeCards(data.results))
}

function searchEnter(event) {
    // console.log(event)
    if (event.key === 'Enter') {
        search()
    }
}

// Display initial results
search()
