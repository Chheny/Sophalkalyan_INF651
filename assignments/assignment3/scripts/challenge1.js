// 1. Write a progem that prints all even numbers between 1 and 50
let num = 1;
let answer = "";
while (num <= 50) {
  if (num % 2 == 0) {
    answer += num + " ";
  }
  num++;
}
document.getElementById("result").innerHTML = answer;
