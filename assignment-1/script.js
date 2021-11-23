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
