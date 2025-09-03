// 1. Variables and Data Types
let name = "Chheny Sophalkalyan";
let age = 23;
let student = true;

console.log("Name:", name, "| Type:", typeof name);
console.log("Age:", age, "| Type:", typeof age);
console.log("Is Student:", student, "| Type:", typeof student);

// 2. Basic Arithmetic Operations
let num1 = 27;
let num2 = 3;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

// 3. Working with Strings
let sentence = "People think coding is fun, it depends on the person";
console.log("Sentence length:", sentence.length);
console.log("First character:", sentence.charAt(0));
console.log("Last character:", sentence.charAt(sentence.length - 1));

// 4. Math Object
let negativeNum = -36;
console.log("Square root:", Math.sqrt(Math.abs(negativeNum)));
console.log("Squared:", Math.pow(negativeNum, 2));
console.log("Absolute value:", Math.abs(negativeNum));

// 5. Boolen Logic and Comparison Operators
let x = 31;
let y = 78;

console.log("x > y:", x > y);
console.log("x < y:", x < y);
console.log("x == y:", x == y);

// 6. Logical Operators
let a = true;
let b = false;

console.log("a && b:", a && b);
console.log("a || b:", a || b);
console.log("!a:", !a);
console.log("!b:", !b);

// 7. Using Template Literals
let firstName = "Chheny";
let lastName = "Sophalkalyan";
let greeting = `Hello, ${firstName} ${lastName}! Welcome to Assignment 2.`;

console.log(greeting);
