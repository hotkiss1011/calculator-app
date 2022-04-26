let plus = document.querySelector('.add');
let minus = document.querySelector('.subtract');
let divide = document.querySelector('.divide');
let times = document.querySelector('.multiply');
let numberBtns = document.querySelectorAll('.number');
let prevOperation = document.querySelector('.prev-operation');
let currentOperation = document.querySelector('.current-operation');
let parameter = "";
let num1 = [];
let num2 = [];

currentOperation.textContent = num1.join("");
numberBtns.forEach(n => n.addEventListener('click', function () {
    num1.push(n.textContent);
}))

// Create 4 operator functions:
    // Add
function Add() {
    parameter = "+";
    return parameter;
}
    // Subtract
function Subtract() {
    parameter = "-";
    return parameter;
}
    // Divide
function Divide() {
    parameter = "/";
    return parameter;
}
    // Multiply
function Multiply() {
    parameter = "*";
    return parameter;
}

plus.addEventListener('click', Add);
minus.addEventListener('click', Subtract);
divide.addEventListener('click', Divide);
times.addEventListener('click', Multiply);
// Create "operate" function w/ 3 parameters: 2 numbers and 1 operator
function operate(num1, num2, parameter) {
    num1 = num1.join("");
    num2 = num2.join("");
    return num1 + parameter + num2
}

// Create function that makes buttons display a value in the display area