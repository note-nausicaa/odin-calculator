// Add click events for buttons

const input = document.getElementById("input");

// User butttons
const userButtons = document.querySelectorAll(".user");

userButtons.forEach((userButton))


/*
function operate() {
    const firstNumber = input.value;
    input.value = '';

    const secondNumber = input.value;
    input.value = '';

    const addButton = document.getElementById("add");

    addButton.addEventListener('click', () => {
        //Add operation
        const add = firstNumber + secondNumber;
    })

    const equalButton = document.getElementById("equals");

    equalButton.addEventListener('click', () => {

    })
} */

const addButton = document.getElementById("add");

addButton.addEventListener('click', () => {
    //Add operation
    const firstNumber = input.value;
    input.value = '';
    const secondNumber = input.value;
    input.value = '';


    
})

const subtractButton = document.getElementById("subtract");

substractButton.addEventListener('click', () => {
    //subtract operation
})

const multiplyButton = document.getElementById("multiply");

multiplyButton.addEventListener('click', () => {
    //Multiply operation
})

const divideButton = document.getElementById("divide");

divideButton.addEventListener('click', () => {
    //Divide operation
})