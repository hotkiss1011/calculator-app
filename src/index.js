// QUERY SELECTORS
let plus = document.querySelector('.add');
let minus = document.querySelector('.subtract');
let divide = document.querySelector('.divide');
let times = document.querySelector('.multiply');
let numberBtns = document.querySelectorAll('.number');
let prevOperation = document.querySelector('.prev-operation');
let currentOperation = document.querySelector('.current-operation');
let clearBtn = document.querySelector('.clear');
let deleteBtn = document.querySelector('.delete');
let equals = document.querySelector('.equals');

// DEFINING NUMBERS AND OPERATOR
let operator = "";
let num1 = currentOperation.textContent;
let num2 = prevOperation.textContent;

clearBtn.addEventListener('click', function() {
    num1 = "";
    num2 = "";
    operator = "";
    currentOperation.textContent = "";
    prevOperation.textContent = "";
    return num1, num2;
})

deleteBtn.addEventListener('click', function() {
    num1 = num1.slice(0, -1);
    currentOperation.textContent = num1;
    return num1;
})

numberBtns.forEach(n => n.addEventListener('click', function () {
    if (prevOperation.textContent === "") {
        num1 = num1.toString() + n.textContent;
        currentOperation.textContent = num1;
        return num1;
    } else {
        num2 = num2.toString() + n.textContent;
        currentOperation.textContent = num2;
        return num1;
    }
}))

// Create "operate" function w/ 3 operators: 2 numbers and 1 operator
function operate(num1, num2, operator) {
    if (operator === "/") {
        prevOperation.textContent = `${num1} ${operator} ${num2} =`;
        num1 = Number(num1) / Number(num2);
        operator = "";
        num2 = "";
        currentOperation.textContent = num1;
        console.log(num1);
        
    }
    return num1, num2, operator;
}

// Create 4 operator functions:
    // Add
const add = function() {
    console.log(num1);
    operator = "+";
    num2 = `${num1} ${operator}`;
    return operator;
}
    // Subtract
const subtract = function () {
    console.log(num1);
    operator = "-";
    num2 = `${num1} ${operator}`;
    return operator;
}
    // Divide
const divided = function () {
    console.log(num1);
    operator = "/";
    prevOperation.textContent = `${num1} ${operator}`;
    return operator;
}
    // Multiply
const multiply = function () {
    console.log(num1);
    operator = "*";
    prevOperation.textContent = `${num1} X `;
    return operator;
}

plus.addEventListener('click', function() {
    add();
});
minus.addEventListener('click', function () {
    subtract();
});
divide.addEventListener('click', function () {
    divided();
});
times.addEventListener('click', function () {
    multiply();
});
equals.addEventListener('click', function() {
    operate(num1, num2, operator);
    return num1, num2, operator;
});