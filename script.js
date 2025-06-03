// (Week 4) Section 1: The Calculator App, Lesson 3: Removing the Zero in the Display 

let newLine = true; // Boolean variable. Determines if the next thing the user types should be on a new line

// (Week 4) Section 1: The Calculator App, Lesson 2: Event Handler

// Event handler for when any digit is pressed
function digitBtnPressed(button) {

    if(newLine) {
        document.getElementById("inputBox").value = button;
        newLine = false;
    } else {
        let currentValue = document.getElementById("inputBox").value;
        document.getElementById("inputBox").value = currentValue + button;
    }    
}

// (Week 4) Section 1: The Calculator App, Lesson 4: AC Button Event Handler

// Event handler for when AC button is pressed
function btnACPressed() {
    document.getElementById("inputBox").value = 0;
    newLine = true;
}