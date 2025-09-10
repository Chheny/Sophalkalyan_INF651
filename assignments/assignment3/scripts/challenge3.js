// 3. Generate a multiplication table for a number entered by the user, but skip multiples of 5
let numInput = prompt("Enter a number to get each multiplication except 5: ");
let tableResult = "";

for (let i = 1; i <= 10; i++) {
  let product = numInput * i;

  if (product % 5 === 0) {
    continue;
  }
  tableResult += numInput + " x " + i + " = " + product + "<br>";
}
document.getElementById("multi").innerHTML = tableResult;
