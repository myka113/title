let moviesList = [
  {
    image: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    title: "Parasite",
    year: "2019",
    rating: "8.6",
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    comments: []
  },
  {
    image: "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    title: "The Queen's Gambit",
    year: "2020",
    rating: "8.8",
    description: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.",
    comments: [{
      name: "John",
      comment: "So boring, i fall asleep to it and hibernated through whole winter"
    }]
  },
  {
    image: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    title: "Joker",
    year: "2019",
    rating: "8.5",
    description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    comments: [
      {
        name: "Marry",
        comment: "Put on a happy face :)"
      },
      {
        name: "Batman",
        comment: "My parents was not impressed with this"
      },
    ]
  },
  {
    image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
    title: "The Godfather",
    year: "1972",
    rating: "9.2",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    comments: []
  },
  {
    image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg",
    title: "Pulp Fiction",
    year: "1994",
    rating: "8.9",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    comments: []
  },
  {
    image: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
    title: "The Shining",
    year: "1980",
    rating: "8.4",
    description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
    comments: [{
      name: "Jane",
      comment: "Soundtrack is epic"
    }]
  },
]


const container = document.getElementById ('container')
const list = document.getElementById('list')
const movie = document.getElementById('movie')
const infoPoster = document.getElementById("infoPoster")
const titleBig = document.getElementById('titleBig')
const ratingBig = document.getElementById('ratingBig')
const ratingStars = document.getElementById('ratingStars')
const description = document.getElementById('description')
const backBtn = document.getElementById('backBtn')
const inputName = document.getElementById('inputName')
const inputText = document.getElementById('inputText')
const submitBtn = document.getElementById('submitBtn')
const commentList = document.getElementById('commentList')
const openAddModal = document.getElementById('openAddModal')
const addModalContainer = document.getElementById('addModalContainer')
const addTitle = document.getElementById('addTitle')
const addPoster = document.getElementById('addPoster')
const addYear = document.getElementById('addYear')
const addRating = document.getElementById('addRating')
const addBtn = document.getElementById('addBtn')
const cancelBtn = document.getElementById('cancelBtn')
const addDescription = document.getElementById('addDescription')


let filteredMovie

function displayList() {
container.style.display = 'flex'
movie.style.display = 'none'
list.innerHTML = ''
  moviesList.map( item => {

      let card = document.createElement('div')
      card.classList.add('movieCard')
      let poster = document.createElement('div')
      poster.classList.add('poster')
      let posterImg = document.createElement('img')
      posterImg.src = item.image
      let infoSide = document.createElement('div')
      infoSide.classList.add('infoSide')
      let title = document.createElement('div')
      title.classList.add('title')
      title.innerText = item.title
      let info = document.createElement('div')
      info. classList.add('info')
      let year = document.createElement('h3')
      year.classList.add('year')
      year.innerText = item.year
      let rating = document.createElement('h3')
      rating.classList.add('rating')
      rating.innerText = item.rating 
      let comments = document.createElement('h3')
      comments.classList.add('comments')
      comments.innerText = `comments: ${item.comments.length}`
      let enter = document.createElement('div')
      enter.classList.add('enter')
      enter.innerText = 'Watch!'

      list.appendChild(card)
      card.appendChild(poster)
      card.appendChild(infoSide)
      poster.appendChild(posterImg)
      infoSide.appendChild(title)
      infoSide.appendChild(info)
      infoSide.appendChild(enter)
      info.appendChild(year)
      info.appendChild(rating)
      info.appendChild(comments)

      enter.addEventListener('click', enterMovie)
  })
}

displayList()

function enterMovie (event) {
  console.log(event.path[1].children[0].innerText);
  filteredMovie = moviesList.filter(el => el.title == event.path[1].children[0].innerText)[0]
  displayMovie()
  console.log(filteredMovie);
}

function displayMovie() {

container.style.display = 'none'
movie.style.display = 'flex'

infoPoster.src = filteredMovie.image
titleBig.innerText = filteredMovie.title
ratingBig.innerText = filteredMovie.rating
description.innerText = filteredMovie.description
displayStars()
displayComments()
}

function displayStars() {
ratingStars.innerHTML = ''
for (let x = 0; x < Math.round(filteredMovie.rating/2)  ; x++) {
  console.log(x);
  ratingStars.innerHTML += '<i class="fas fa-star"></i>'
}
}

function submitComment(event) {
console.log(event.path[1].children[0].value);
if (event.path[1].children[0].value.length != 0 && event.path[1].children[1].value.length != 0) {
  let newComment = {
    name: event.path[1].children[0].value,
    comment: event.path[1].children[1].value
  }
  moviesList[moviesList.indexOf(filteredMovie)].comments.push(newComment)
  console.log(moviesList[moviesList.indexOf(filteredMovie)].comments);
}
displayComments()
event.path[1].children[0].value = ''
event.path[1].children[1].value = ''
}

function displayComments() {
commentList.innerHTML = ''
moviesList[moviesList.indexOf(filteredMovie)].comments.map ( item => {
  let commentCard = document.createElement('div')
  commentCard.classList.add('commentCard')
  let comentName = document.createElement('div')
  comentName.innerText = item.name
  comentName.classList.add('comentName')
  let comentText = document.createElement('div')
  comentText.innerText = item.comment
  let commentRemove = document.createElement('div')
  commentRemove.classList.add('commentRemove')
  commentRemove.innerHTML = '<i class="far fa-trash-alt"></i>'

  commentList.appendChild(commentCard)
  commentCard.appendChild(comentName)
  commentCard.appendChild(comentText)
  commentCard.appendChild(commentRemove)

  commentRemove.addEventListener('click', removeComment)
})

}


function removeComment (event) {
moviesList[moviesList.indexOf(filteredMovie)].comments = moviesList[moviesList.indexOf(filteredMovie)].comments.filter(el => el.comment !== event.path[2].children[1].innerText)
console.log(event);
displayComments()
}
function addMovie() {
let newMovie = {}
newMovie.title = addTitle.value
newMovie.image = addPoster.value
newMovie.year = addYear.value
newMovie.rating = addRating.value
newMovie.description = addDescription.value
newMovie.comments= []
if(newMovie.title.length != 0 && newMovie.image.length != 0 && newMovie.year.length == 4 && newMovie.rating.length != 0 && newMovie.description.length != 0) {
  moviesList.unshift(newMovie)
  displayList()
  closeModal()
}

}

function opennewMovieCard () {
addModalContainer.style.display = "flex"
addTitle.value = ''
addPoster.value = ''
addYear.value = ''
addRating.value = ''
addDescription.value = ''
}

function closeModal() {
addModalContainer.style.display = "none"

}



backBtn.addEventListener('click', displayList)
submitBtn.addEventListener('click', submitComment)
openAddModal.addEventListener('click', opennewMovieCard)
cancelBtn.addEventListener('click', closeModal)
addBtn.addEventListener('click', addMovie)