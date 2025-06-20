function themeFunction() {
   document.body.classList.toggle("dark-mode");
}
function calculate() {
   let nr1 = parseFloat(document.getElementById("nr1").value);
   let operator = document.getElementById("operator").value;
   let nr2 = parseFloat(document.getElementById("nr2").value);

   let result;
   switch (operator) {
      case "+":
         result = nr1 + nr2;
         break;
      case "-":
         result = nr1 - nr2;
         break;
      case "*":
         result = nr1 * nr2;
         break;
      case "/":
         if (nr2 === 0) {
            result = "Cannot divide by zero";
         } else {
            result = nr1 / nr2;
         }
         break;
      case "^":
         result = Math.pow(nr1, nr2);
         break;

      default:
         result = "Invalid operator";
   }
   document.getElementById("result").innerHTML = "Result: " + result;
   document.getElementById("result").style.display = "block";
}

function reset() {
   document.getElementById("nr1").value = "";
   document.getElementById("operator").value = " ";
   document.getElementById("nr2").value = "";
   document.getElementById("result").innerHTML = "Result: ";
   document.getElementById("result").style.display = "none";
}

// !calculator 2 starts here one that looks normal?

function inpValue(value) {
   document.getElementById("calculator-display2").value += value;
}

function calculate2() {
   const display2 = document.getElementById("calculator-display2");
   try {
      const result = eval(display2.value);

      if (result === Infinity || result === -Infinity) {
         display2.value = "Can't divide by zero!";
      } else {
         display2.value = result;
      }
   } catch (error) {
      display2.value = "Invalid input!";
   }
}

function reset2() {
   document.getElementById("calculator-display2").value = "";
}

//! Function to delete the last character from the display

function deleteLast() {
   const display = document.getElementById("calculator-display2");
   display.value = display.value.slice(0, -1);
}
