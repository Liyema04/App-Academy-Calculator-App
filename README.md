# App-Academy-Calculator-App
Building a fully responsive calculator app 🔢
# **Into to the Calculator App**

***In this project, we're going to be building a fully responsive calculator app.***

- Design → similar to iPhone Calculator App
- Prioritize functionalty & responsiveness

# *Lesson 1* - HTML Layout

We start the project by  laying out the skeleton of it in HTML.

```html
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>JS Calculator App</title>
        <link rel="stylesheet" type="text" href="style.css">
        <script src="script.js" defer></script> 
    </head>
    <body>
        <div class="calculator">
            <table border="1">
                <tr>
                    <td colspan="4">
                        <input type="text" id="inputBox" value="0"> 
                    </td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>x</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>+</td>
                </tr>
                <tr>
                    <td colspan="2">0</td>
                    
                    <td>AC</td>
                    <td>÷</td>
                </tr>
                <tr>
                    <td colspan="4">=</td>                    
                </tr>
            </table>
        </div>
        
    </body>
</html>
```

---
# *Lesson 2* - Event Handler

Next, we setup some Event Handlers that will detect whenever a button is pressed.

```jsx
// (Week 4) Section 1: The Calculator App, Lesson 2: Event Handler
function digitBtnPressed(button) {
    var currentValue = document.getElementById("inputBox").value;
    document.getElementById("inputBox").value = currentValue + button;
}
```

Adding function to numbers :

```html
<tr>
    <td colspan="4">
         <input type="text" id="inputBox" value="0"> 
    </td>
</tr>
<tr>
     <td onclick="digitBtnPressed(7)">7</td>
     <td onclick="digitBtnPressed(8)">8</td>
     <td onclick="digitBtnPressed(9)">9</td>
     <td>x</td>
</tr>
<tr>
     <td onclick="digitBtnPressed(4)">4</td>
     <td onclick="digitBtnPressed(5)">5</td>
     <td onclick="digitBtnPressed(6)">6</td>
     <td>-</td>
</tr>
<tr>
     <td onclick="digitBtnPressed(1)">1</td>
     <td onclick="digitBtnPressed(2)">2</td>
     <td onclick="digitBtnPressed(3)">3</td>
     <td>+</td>
</tr>
```

---
# *Lesson 3* - Removing the Zero in the Display

***In this lesson, we add in some code that removes the zero from the top of the calculator once the user start entering in some numbers.***

e.g.

```jsx
// (Week 4) Section 1: The Calculator App, Lesson 3: Removing the Zero in the Display 
let newLine = true;
// (Week 4) Section 1: The Calculator App, Lesson 2: Event Handler
function digitBtnPressed(button) {

    if(newLine) {
        document.getElementById("inputBox").value = button;
        newLine = false;
    } else {
        let currentValue = document.getElementById("inputBox").value;
        document.getElementById("inputBox").value = currentValue + button;
    }    
}
```

---
# *Lesson 4* - AC Button Event Handler

***In this lesson we add in the Event Handler for the AC button. This button will blank the input area of the calculator.***

e.g.

```jsx
// (Week 4) Section 1: The Calculator App, Lesson 4: AC Button Event Handler

// Event handler for when AC button is pressed
function btnACPressed() {
    document.getElementById("inputBox").value = 0;
    newLine = true;
}
```

**Adding function to AC (button) :**

```html
 <tr>
     <td colspan="2" onclick="digitBtnPressed(0)">0</td>
                    
     <td onclick="btnACPressed()">AC</td> <!--AC BUTTON function added-->
     <td>÷</td>
</tr>
```

---
# *Lesson 5* - Operator Button Event Handler

***Add the Event Handlers for the operator buttons.***

Objectives:

1. Store on-screen value
2. Remeber the operator
3. Clear screen when the next digit typed

e.g.

```jsx
// (Week 4) Section 1: The Calculator App, Lesson 5: Operator Button Event Handler

// Event handler for when Operator button is pressed
function operatorBtnPressed(operator) { 
    currentOperator = operator;
    value1 = parseInt(document.getElementById("inputBox").value);
    newLine = true;
}
```

Add function to operators in HTML :

```html
<tr>
    <td onclick="digitBtnPressed(7)">7</td>
    <td onclick="digitBtnPressed(8)">8</td>
    <td onclick="digitBtnPressed(9)">9</td>
    <td onclick="operatorBtnPressed('*')">x</td> <!--Operator Event Handler-->
</tr>
<tr>
    <td onclick="digitBtnPressed(4)">4</td>
    <td onclick="digitBtnPressed(5)">5</td>
    <td onclick="digitBtnPressed(6)">6</td>
    <td onclick="operatorBtnPressed('-')">-</td> <!--Operator Event Handler-->
</tr>
<tr>
    <td onclick="digitBtnPressed(1)">1</td>
    <td onclick="digitBtnPressed(2)">2</td>
    <td onclick="digitBtnPressed(3)">3</td>
    <td onclick="operatorBtnPressed('+')">+</td> <!--Operator Event Handler-->
</tr>
<tr>
    <td colspan="2" onclick="digitBtnPressed(0)">0</td>
                    
    <td onclick="btnACPressed()">AC</td>
    <td onclick="operatorBtnPressed('/')">÷</td> <!--Operator Event Handler-->
</tr>
```

---
# *Lesson 6* - Equals Button Event Handler

***Our calculator app is starting to come together. In this lesson, we add in the final piece of JavaScript. The equals button Event Handler.***

Objectives:

1. Equals button performs specified (Arithmetic Operations)
2. Reset alll curent values (Prepares calculator for next operation ) 

e.g.

```jsx
// (Week 4) Section 1: The Calculator App, Lesson 6: Equals Button Event Handler

// Event handler for Equals-To button
function equalsBtnPressed() {
    let value2 = parseInt(document.getElementById("inputBox").value);
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
    document.getElementById("inputBox").value = finalTotal;

    value1 = 0;
    newLine = true;
}
```

Add function to (equals) in HTML :

```html
 <tr>
     <td colspan="4" onclick="equalsBtnPressed()">=</td>
 </tr>
```

---
# *Lesson 7* - Styling

***The JavaScript part of the app is done and we have a fully functional calculator. The last thing we need to do add a bit of styling to the app.*** 

Objectives:

1. inputBox [dark grey]
2. Operators same styling → same <div class=”#”>
3. Digits same styling → same <div class=”#”>
4. AC-box [lighter grey]

e.g.

```css
table {
    color: #fff;
    text-align: center;
    border-radius: 18px; /*mod*/
    font: normal 3em Arial, Helvetica, sans-serif;
    gap: 6px; /*mod*/
}

tr {
    height: 16.02vh;
    background-color: #4e494d;
    border-radius: 18px; /*mod*/
}

td {
    width: 25vw;
    border: 1px solid #fff;
    border-radius: 18px; /*mod*/
}

#inputBox {
    background-color: #4e494d;
    text-align: right;
    width: 98%; /*mod*/
    font-size: 2em;
    color: #fff;
    border: 0px;
}

.digitButton {
    background-color: #807e80;
}

.operatorButton {
    background-color: #ff9e06;
}

.ACButton {
    background-color: #656165;
}
```

Changes in HTML :

```html
<div class="calculator">
            <table border="4">
                <tr>
                    <td colspan="4">
                        <input type="text" id="inputBox" value="0"> 
                    </td>
                </tr>
                <tr>
                    <td class="digitButton" onclick="digitBtnPressed(7)">7</td>
                    <td class="digitButton" onclick="digitBtnPressed(8)">8</td>
                    <td class="digitButton" onclick="digitBtnPressed(9)">9</td>
                    <td class="operatorButton" onclick="operatorBtnPressed('*')">x</td> <!--Operator Event Handler-->
                </tr>
                <tr>
                    <td class="digitButton" onclick="digitBtnPressed(4)">4</td>
                    <td class="digitButton" onclick="digitBtnPressed(5)">5</td>
                    <td class="digitButton" onclick="digitBtnPressed(6)">6</td>
                    <td class="operatorButton" onclick="operatorBtnPressed('-')">-</td> <!--Operator Event Handler-->
                </tr>
                <tr>
                    <td class="digitButton" onclick="digitBtnPressed(1)">1</td>
                    <td class="digitButton" onclick="digitBtnPressed(2)">2</td>
                    <td class="digitButton" onclick="digitBtnPressed(3)">3</td>
                    <td class="operatorButton" onclick="operatorBtnPressed('+')">+</td> <!--Operator Event Handler-->
                </tr>
                <tr>
                    <td class="digitButton" colspan="2"  onclick="digitBtnPressed(0)">0</td>
                    
                    <td class="ACButton" onclick="btnACPressed()">AC</td>
                    <td class="operatorButton" onclick="operatorBtnPressed('/')">÷</td> <!--Operator Event Handler-->
                </tr>
                <tr>
                    <td class="equalsButton" colspan="4" onclick="equalsBtnPressed()">=</td>
                </tr>
            </table>
</div>
```

---
