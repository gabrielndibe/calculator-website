const firstNumber = document.getElementById("num1");
const secondNumber = document.getElementById("num2");
const addBtn =  document.getElementById("add-btn");
const subtractBtn =  document.getElementById("subtract-btn");
const multiplyBtn =  document.getElementById("multiply-btn");
const divideBtn =  document.getElementById("divide-btn");
const resultElement = document.getElementById('result');
const errorMsg = document.getElementById("error");

function calculate (operation) {
 const num1 = parseFloat(firstNumber.value);
 const num2 = parseFloat(secondNumber.value);

if (isNaN(num1) || isNaN(num2)) {
    errorMsg.textContent = `Please enter valid numbers!`;
    setTimeout(() => {
   errorMsg.textContent = "";
    }, 3000)
    return;
}

let result;
switch(operation) {
    case 'add':
    result = num1 + num2;
    break;
    case 'subtract':
   result = num1 - num2;
   break;
   case 'multiply':
    result = num1 * num2;
    break;
    case 'divide':
    if (num2 === 0) {
        errorMsg.textContent = `Cannot divide by zero!`;
        setTimeout(() => {
            errorMsg.textContent = "";
             }, 3000)
        return;
    }
   result = num1 / num2;
   break;
}

resultElement.textContent = `Result: ${result.toFixed(2)}`;
}
addBtn.addEventListener('click', () => calculate('add'));
subtractBtn.addEventListener('click', () => calculate('subtract'));
multiplyBtn.addEventListener('click', () => calculate('multiply'));
divideBtn.addEventListener('click', () => calculate('divide'))