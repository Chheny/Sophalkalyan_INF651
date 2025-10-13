// ===== Movie Watchlist App =====

// Array to store movie titles
let watchlist = [];

// Get elements
const movieInput = document.getElementById("movie-name");
const addMovieBtn = document.getElementById("add-movie-btn");
const movieList = document.getElementById("movie-list");

// Function to add a movie
function addMovie() {
  const movieTitle = movieInput.value.trim();

  if (movieTitle === "") {
    M.toast({ html: "Please enter a movie title!", classes: "red" });
    return;
  }

  // Add movie to array
  watchlist.push(movieTitle);

  // Clear input field
  movieInput.value = "";

  // Update movie list
  displayMovies();
}

// Function to display movies dynamically
function displayMovies() {
  movieList.innerHTML = ""; // Clear current list

  watchlist.forEach((movie, index) => {
    // Create list item
    const li = document.createElement("li");
    li.classList.add("collection-item");

    // Movie title span
    const span = document.createElement("span");
    span.classList.add("movie-title");
    span.textContent = movie;

    // Remove button (using Material icon)
    const removeBtn = document.createElement("i");
    removeBtn.classList.add("material-icons", "remove-btn");
    removeBtn.textContent = "delete";

    // Remove event
    removeBtn.addEventListener("click", () => removeMovie(index));

    // Append elements
    li.appendChild(span);
    li.appendChild(removeBtn);
    movieList.appendChild(li);
  });
}

// Function to remove a movie
function removeMovie(index) {
  watchlist.splice(index, 1); // Remove one movie at index
  displayMovies(); // Update list
}

// Event listeners
addMovieBtn.addEventListener("click", addMovie);

// Allow pressing "Enter" key to add movie
movieInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addMovie();
  }
});
