// 2. Create a PIN validator that asks the user to enter a 4-digit PIN until they get it correct.
const correctPIN = "7654";
let enteredPIN;

do {
  enteredPIN = prompt("Enter your 4-digit PIN: ");
} while (enteredPIN !== correctPIN);

alert("The PIN is correct!");
