let plus = document.querySelector('.add');
let minus = document.querySelector('.subtract');
let divide = document.querySelector('.divide');
let times = document.querySelector('.multiply');
let numberBtns = document.querySelectorAll('.number');
let prevOperation = document.querySelector('.prev-operation');
let currentOperation = document.querySelector('.current-operation');
let clearBtn = document.querySelector('.clear');
let deleteBtn = document.querySelector('.delete');

let operator = "";
let currentOperationText = currentOperation.textContent;
prevOperationText = prevOperation.textContent;

clearBtn.addEventListener('click', function() {
    currentOperation.textContent = "";
    prevOperation.textContent = "";
    return currentOperationText, prevOperationText
})

// FIX THIS!!!
deleteBtn.addEventListener('click', function() {
    currentOperation.pop();
    return currentOperationText;
})

numberBtns.forEach(n => n.addEventListener('click', function () {
    if (operator === "") {
        console.log(currentOperationText)
        currentOperationText = currentOperationText.toString() + n.textContent;
        currentOperation.textContent = currentOperationText;
        return currentOperationText;
    } else {
        prevOperationText = currentOperationText;
        currentOperationText = currentOperationText + n.textContent;
        return currentOperationText;
    }
}))

// Create 4 operator functions:
    // Add
const add = function() {
    operator = "+";
    prevOperationText = `${currentOperationText} ${operator}`;
    return operator;
}
    // Subtract
const subtract = function () {
    operator = "-";
    prevOperationText = `${currentOperationText} ${operator}`;
    return operator;
}
    // Divide
const divided = function () {
    operator = "/";
    prevOperation.textContent = `${num1.join("")} ${operator}`;
    return operator;
}
    // Multiply
const multiply = function () {
    operator = "*";
    prevOperation.textContent = `${num1.join("")} X `;
    return operator;
}

plus.addEventListener('click', add);
minus.addEventListener('click', subtract);
divide.addEventListener('click', divided);
times.addEventListener('click', multiply);

// Create "operate" function w/ 3 operators: 2 numbers and 1 operator
function operate(num1, num2, operator) {
    if (operator === "/") {
        prevOperation.textContent = Number(num1.join("")) / Number(num2.join(""));
    }
    return num1 + operator + num2;
}

// Create function that makes buttons display a value in the display area