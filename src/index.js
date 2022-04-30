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

// DEFINING NUMBERS AND OPERATOR IN OBJECT
const equation = {num1: "", num2: "", operator: ""}

// CLEAR BUTTON RESETS DISPLAY AND EQUATION
clearBtn.addEventListener('click', function() {
    equation.num1 = "";
    equation.num2 = "";
    equation.operator = "";
    currentOperation.textContent = "";
    prevOperation.textContent = "";
    console.log(equation['num1', 'num2']);
    return equation['num1', 'num2'];
})

// DELETE WILL DELETE THE END DIGIT OF THE CURRENT OPERATION
deleteBtn.addEventListener('click', function() {
    equation.num1 = equation.num1.toString().slice(0, -1);
    currentOperation.textContent = equation.num1;
    return equation.num1;
})

// NUMBER BUTTON FUNCTIONS
numberBtns.forEach(n => n.addEventListener('click', function () {
    // INITIAL USER ENTRY (no previous operation)
    if (prevOperation.textContent === "") {
        if (equation.num1 === '0') {
            equation.num1 = n.textContent;  
        } else {
            equation.num1 = equation.num1.toString() + n.textContent;
        }
        currentOperation.textContent = equation.num1;
        return equation.num1;
    } else {
        // if user is not trying to use the previous operation's answer, it will reset the calculator and begin next calculation
        if (prevOperation.textContent.includes("=")) {
            console.log(equation.num2);
            equation.operator = "";
            equation.num2 = "";
            prevOperation.textContent = "";
            equation.num1 = ""
            equation.num1 = equation.num1.toString() + n.textContent;
            currentOperation.textContent = equation.num1;
            return equation['num1', 'num2', 'operation'];
        } else {
            // INITIAL SECOND NUMBER ENTRY (previous operation not yet calculated)
            if (equation.num2 === '0') {
                equation.num2 = n.textContent;  
            } else {
                equation.num2 = equation.num2.toString() + n.textContent;
            }
            currentOperation.textContent = equation.num2;
            return equation.num2;
        }
    }
}))

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

// OPERATOR EVENT LISTENERS
plus.addEventListener('click', function() {
    // if there is no operator yet, get an operator
    if (equation.operator === "") {
        add();
    } else {
        if (equation.num2 === "") {
            equation.num2 = equation.num1;
        }
        //if there is already an operator, run the operation, then get new operator
        operate(equation.num1, equation.num2, equation.operator);
        add();
    }
});
minus.addEventListener('click', function () {
    if (equation.operator === "") {
        subtract();
    } else {
        operate(equation.num1, equation.num2, equation.operator);
        subtract();
    }
});
divide.addEventListener('click', function () {
    if (equation.operator === "") {
        divided();
    } else {
        if (equation.num2 === "") {
            equation.num2 = equation.num1;
        }
        if (equation.num2 === "") {
            equation.num2 = equation.num1;
        }
        operate(equation.num1, equation.num2, equation.operator);
        divided();
    }
});
times.addEventListener('click', function () {
    if (equation.operator === "") {
        multiply();
    } else {
        if (equation.num2 === "") {
            equation.num2 = equation.num1;
        }
        operate(equation.num1, equation.num2, equation.operator);
        multiply();
    }
});
equals.addEventListener('click', function() {
    operate(equation.num1, equation.num2, equation.operator);
});