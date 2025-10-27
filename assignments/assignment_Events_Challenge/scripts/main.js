// Get references to DOM elements
const nameInput = document.getElementById("nameInput");
const submitButton = document.getElementById("submitButton");
const outputDiv = document.getElementById("outputDiv");
const mouseTracker = document.getElementById("mouseTracker");
const coordinatesDiv = document.getElementById("coordinates");

// Function to handle form submission
function handleSubmit() {
  const name = nameInput.value.trim(); // Remove extra spaces
  if (name) {
    outputDiv.textContent = `Welcome, ${name}!`;
    outputDiv.style.backgroundColor = "green";
    outputDiv.style.color = "white";
  } else {
    outputDiv.textContent = "Error: Please enter a name.";
    outputDiv.style.backgroundColor = "red";
    outputDiv.style.color = "white";
  }
}

// Click event for submit button
submitButton.addEventListener("click", handleSubmit);

// Keyboard event: trigger submit on Enter key
nameInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    handleSubmit();
  }
});

// Mouse movement tracking
mouseTracker.addEventListener("mousemove", function (event) {
  const rect = mouseTracker.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  coordinatesDiv.textContent = `Mouse Coordinates: X: ${x}, Y: ${y}`;
});
