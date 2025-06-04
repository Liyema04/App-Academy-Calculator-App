let newLine = true; // Boolean variable. Determines if the next thing the user types should be on a new line
let value1;
let currentOperator;

// Event handler for Decimal button is 
function decimalBtnPressed() {
    let inputBox = document.getElementById("inputBox");
    if (newLine) {
        inputBox.value = "0.";
        newLine = false;
    } else if(!inputBox.value.includes(".")) {
        inputBox.value += ".";
    }
} 


// Event handler for when any digit is pressed
function digitBtnPressed(button) {
    let inputBox = document.getElementById("inputBox");
    if(newLine) {
        inputBox.value = button;
        newLine = false;
    } else {
        let currentValue = inputBox.value;
        if (currentValue === "0") {
            inputBox.value = button;
        } else {
            inputBox.value = currentValue + button;
        }
    }    
}

// Event handler for when AC button is pressed
function btnACPressed() {
    document.getElementById("inputBox").value = 0;
    newLine = true;
}


// Event handler for when Operator button is pressed
function operatorBtnPressed(operator) { 
    currentOperator = operator;
    value1 = parseFloat(document.getElementById("inputBox").value); // changed to float
    newLine = true;
}


// Event handler for Equals-To button
function equalsBtnPressed() {
    let value2 = parseFloat(document.getElementById("inputBox").value); // changed to float
    let finalTotal;

    switch(currentOperator) {
        case "+":
            finalTotal = value1 + value2;
            break;
        case "-":
            finalTotal = value1 - value2;
            break;
        case "/":
            finalTotal = value1 / value2;
            break;
        case "*":
            finalTotal = value1 * value2;
            break;        
    }
    document.getElementById("inputBox").value = Number.isFinite(finalTotal) ? finalTotal : "Error"; // Error instance
    value1 = 0;
    newLine = true;
}