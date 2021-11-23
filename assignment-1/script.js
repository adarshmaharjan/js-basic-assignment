let firstNum = prompt("Enter a first Number").trim()
let operation = prompt(
    "Enter the calculation operation(+,-,/,*) you want to perform"
).trim()
let secondNum = prompt("Enter a second Number").trim()
// DOM elements

let root = document.getElementById("root")

// just a good idea about the code
try {
    const show = (firstNum, secondNum, operation) => {
        if (
            operation === "+" ||
            operation === "-" ||
            operation === "/" ||
            operation === "*"
        ) {
            let result = eval(firstNum + operation + secondNum)
            root.textContent = `${firstNum}  ${operation}  ${secondNum} = ${result}`
        } else {
            throw new Error("Invalid operation")
        }
    }
    show(firstNum, secondNum, operation)
} catch (err) {
    alert(`Please enter a valid inputs`, err.name)
    root.textContent = "Please enter a valid inputs"
}

//Inputs
// let firstNum = 2
// let secondNum = 3
// let operation = "/"

// show(firstNum, secondNum, operation)
// console.log(firstNum, secondNum, operation)
// const add = (firstNum, secondNum, operation) => {
//     let result = firstNum + secondNum
//     show(firstNum, secondNum, operation, result)
// }
// const sub = (firstNum, secondNum, operation) => {
//     let result = firstNum - secondNum
//     show(firstNum, secondNum, operation, result)
// }
// const multiply = (firstNum, secondNum, operation) => {
//     let result = firstNum + secondNum
//     show(firstNum, secondNum, operation, result)
// }
// const div = (firstNum, secondNum, operation) => {
//     let result = (firstNum / secondNum).toFixed(3)
//     show(firstNum, secondNum, operation, result)
// }
// if (operation === "+") add(firstNum, secondNum, operation)

// if (operation === "-") sub(firstNum, secondNum, operation)

// if (operation === "*") multiply(firstNum, secondNum, operation)

// if (operation === "/") div(firstNum, secondNum, operation)
