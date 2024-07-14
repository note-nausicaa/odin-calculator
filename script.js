
//Display
const userDisplay = document.querySelector("span");

const numberButtons = document.querySelectorAll('.user');
const button = document.querySelector('button');

let firstNumber = 0;
let secondNumber = 0;

// numberButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//         if (userDisplay.textContent == ''){
//             const number = button.textContent;
//             firstNumber = parseFloat(number);
//             userDisplay.textContent = number;
//         }
//         else {
//             const userOperation = userDisplay.textContent;
//             const number = button.textContent;
//             secondNumber = parseFloat(number);
//             let newDisplay = userOperation.concat(number);
//             userDisplay.textContent = newDisplay;
//         }
//     })
// });


numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (userDisplay.textContent == ''){
            const number = button.textContent;
            userDisplay.textContent = number;
        }
        else {
            const userOperation = userDisplay.textContent;
            const number = button.textContent;
            let newDisplay = userOperation.concat(number);
            userDisplay.textContent = newDisplay;
        }
    })
});



const operatorButtons = document.querySelectorAll('.operation');

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const number = userDisplay.textContent;
        const operator = button.textContent;
        let newDisplay = number.concat(operator);
        userDisplay.textContent = newDisplay;
    })
})

const equals = document.getElementById('equals');

equals.addEventListener('click', () => {
    let result = userDisplay.textContent;
    if (result.includes("+") == true) {
        firstNumber = result.split('+').map((element) => Number(element)).reduce((total, addNum) => total += addNum)
    } else if (result.includes("-") == true) 
    {
        firstNumber = firstNumber - secondNumber;
    } else if (result.includes("/") == true) {
        firstNumber = firstNumber / secondNumber;
    }
    else if (result.includes("*")== true) {
        firstNumber = firstNumber*secondNumber;
    }
    userDisplay.textContent = firstNumber;
})

const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', () => {
    userDisplay.textContent = '';
    firstNumber = 0;
    secondNumber = 0;
})

//

/* const fourButton = document.getElementById("four");

fourButton.addEventListener('click', () => {
    let number = fourButton.textContent;
    userDisplay.textContent = number;
})*/


//Maybe can add text value from HTML file to a string ??


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
} 

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
    */