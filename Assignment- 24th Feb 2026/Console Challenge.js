let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let operation = prompt("Enter operation (+, -, *, /):");

let result;

if (operation === "+") {
    result = num1 + num2;
} 
else if (operation === "-") {
    result = num1 - num2;
} 
else if (operation === "*") {
    result = num1 * num2;
} 
else if (operation === "/") {
    if (num2 === 0) {
        result = "Cannot divide by zero";
    } else {
        result = num1 / num2;
    }
} 
else {
    result = "Invalid operation";
}

console.log("Result:", result);