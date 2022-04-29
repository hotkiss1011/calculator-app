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
const equation = {num1: "", num2: "", operator: ""}

clearBtn.addEventListener('click', function() {
    equation.num1 = "";
    equation.num2 = "";
    equation.operator = "";
    currentOperation.textContent = "";
    prevOperation.textContent = "";
    console.log(equation['num1', 'num2']);
    return equation['num1', 'num2'];
})

deleteBtn.addEventListener('click', function() {
    equation.num1 = equation.num1.toString().slice(0, -1);
    currentOperation.textContent = equation.num1;
    return equation.num1;
})

numberBtns.forEach(n => n.addEventListener('click', function () {
    if (prevOperation.textContent === "") {
        equation.num1 = equation.num1.toString() + n.textContent;
        currentOperation.textContent = equation.num1;
        return equation.num1;
    } else {
        if (prevOperation.textContent.includes("=")) {
            console.log(equation.num2);
            equation.operator = "";
            equation.num2 = "";
            prevOperation.textContent = "";
            equation.num1 = equation.num1.toString() + n.textContent;
            currentOperation.textContent = equation.num1;
            return equation['num1', 'num2', 'operation'];
        } else {
            equation.num2 = equation.num2.toString() + n.textContent;
            currentOperation.textContent = equation.num2;
            console.log(equation.num2);
            return equation.num2;
        }
    }
}))

// Create "operate" function w/ 3 operators: 2 numbers and 1 operator
function operate(num1, num2, operator) {
    if (operator === "/") {
        prevOperation.textContent = `${num1} ${operator} ${num2} =`;
        equation.num1 = Number(equation.num1) / Number(equation.num2);
        currentOperation.textContent = equation.num1;
    } else if (equation.operator === "*") {
        prevOperation.textContent = `${equation.num1} ${equation.operator} ${equation.num2} =`;
        equation.num1 = Number(equation.num1) * Number(equation.num2);
        currentOperation.textContent = equation.num1;
    } else if (equation.operator === "+") {
        prevOperation.textContent = `${equation.num1} ${equation.operator} ${equation.num2} =`;
        equation.num1 = Number(equation.num1) + Number(equation.num2);
        currentOperation.textContent = equation.num1;
    } else if (equation.operator === "-") {
        prevOperation.textContent = `${equation.num1} ${equation.operator} ${equation.num2} =`;
        equation.num1 = Number(equation.num1) - Number(equation.num2);
        currentOperation.textContent = equation.num1;
    }
    equation.num2 = "";
    equation.operator = "";
    return [equation.num1, equation.num2, equation.operator];
}

// Create 4 operator functions:
    // Add
const add = function() {
    console.log(equation.num1);
    equation.operator = "+";
    prevOperation.textContent = `${equation.num1} ${equation.operator}`;
    return equation.operator;
}
    // Subtract
const subtract = function () {
    console.log(equation.num1);
    equation.operator = "-";
    prevOperation.textContent = `${equation.num1} ${equation.operator}`;
    return equation.operator;
}
    // Divide
const divided = function () {
    console.log(equation.num1);
    equation.operator = "/";
    prevOperation.textContent = `${equation.num1} ${equation.operator}`;
    return equation.operator;
}
    // Multiply
const multiply = function () {
    console.log(equation.num1);
    equation.operator = "*";
    prevOperation.textContent = `${equation.num1} X `;
    return equation.operator;
}

// OPERATOR EVENT LISTENERS
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
    operate(equation.num1, equation.num2, equation.operator);
});