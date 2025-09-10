// Changes the image when clicked
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/woman.jpg") {
    myImage.setAttribute("src", "images/tree.png");
  } else {
    myImage.setAttribute("src", "images/woman.jpg");
  }
});

// Creates references to the new button and heading
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// Personlized greeting
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

// Bloack after the function is declared
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

// Add a click event handler function to the button
myButton.addEventListener("click", () => {
  setUserName();
});

// Condition to check that the user hasn't entered a blank name
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
