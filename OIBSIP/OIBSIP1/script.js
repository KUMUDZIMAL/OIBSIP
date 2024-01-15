document.addEventListener("DOMContentLoaded", function () {

    const initialDisplay = document.getElementById("initial");
    const buttons = document.querySelectorAll(".C");
    let expression = "";


    function updateDisplay() {
        initialDisplay.textContent = expression;
    }

   
    function handleButtonClick(value) {
      
        if (value === "=") {
            try {
                expression = eval(expression).toString();
            } catch (error) {
                expression = "Error";
            }
        } else if (value === "AC") {
            expression = "";
        } else if (value === "%") {
  
            try {
                expression = (eval(expression) / 100).toString();
            } catch (error) {
                expression = "Error";
            }
        } else if (value === "x") {
        
            expression = expression.slice(0, -1);
        } else {
            expression += value;
        }

        updateDisplay();
    }

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const buttonValue = this.textContent;
            handleButtonClick(buttonValue);
        });
    });
});
