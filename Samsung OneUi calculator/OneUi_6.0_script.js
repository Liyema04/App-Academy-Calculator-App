// Page window : Open Animation
window.addEventListener('DOMContentLoaded', function() {
    // Start with back face visible
    document.getElementById("calcFlipCard").style.transform = "rotateY(0deg)";
    // Animate flip from back (welcome text) to front (calculator)
    anime({
        targets: '#calcFlipCard',
        rotateY: [0, 180],
        duration: 1200,
        easing: 'easeInOutSine'
    });

    // Event listeners after DOM is loaded
    document.getElementById('historyBtn').addEventListener('click', showHistory);
    document.getElementById('closeHistoryBtn').addEventListener('click', hideHistory);
    document.getElementById('historyPopup').addEventListener('click', function(e) {
        if (e.target === this) hideHistory();
    });
});

// Calculator 
let newLine = true; // Boolean variable. Determines if the next thing the user types should be on a new line
let value1;
let currentOperator;
let history = [];

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

// Event handler for history button
function showHistory() {
    const popup = document.getElementById("historyPopup");
    const list = document.getElementById("historyList");
    list.innerHTML= '';
    if (history.length === 0) {
        list.innerHTML = '<li>No history yet.</li>';
    } else {
        history.slice().reverse().forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        });
    }
    popup.style.display = 'flex';
}

function hideHistory() {
    document.getElementById("historyPopup").style.display = 'none';
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
    let display = Number.isFinite(finalTotal) ? finalTotal : "Error"; // Error instance
    document.getElementById("inputBox").value = display;
    // Save to history
    if (currentOperator && !isNaN(value1) && !isNaN(value2)) {
        history.push(`${value1} ${currentOperator} ${value2} = ${display}`)
    } 
    value1 = 0;
    newLine = true;
}
// Try it out -> Button
document.getElementById('tryItBtn').addEventListener('click', function() {
    // Flip back to welcome text
    anime({
        targets: '#calcFlipCard',
        rotateY: [180, 0],
        duration: 1200,
        easing: 'easeInOutSine'
    });
});