document.querySelector("form").addEventListener("submit", addMovie);
const message = document.querySelector('#message')

function addMovie(event) {
  event.preventDefault();
  let inputField = document.querySelector('input')

  const movie = document.createElement('li')

  const movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle)

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "x";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn)


const list = document.querySelector("ul");
list.appendChild(movie);
inputField.value = ''
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = 'all gone'
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    if (movie === 0){console.log }
}











