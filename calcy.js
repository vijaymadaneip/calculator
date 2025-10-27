// stores the current input 
let currentInput = ""; 

// all calculator buttons
let buttons = document.querySelectorAll('button');

// click event listener to each button
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const btnText = event.target.innerText;                                                 
        const displayOutput = document.getElementById('display');                           // reference to the screen

        if (btnText === "=") { 
            if (currentInput === "") { 
                currentInput = "0"; 
            } else {
                try {
                    currentInput = eval(currentInput);                                      // calculation here using eval
                } catch {
                    currentInput = "Error";
                }
            }
            displayOutput.value = currentInput;                                             // show result on screen
            displayOutput.scrollLeft = displayOutput.scrollWidth; 
            console.log(`equals btn clicked: ${currentInput}`);
        
        } else if (btnText === "C") { 
            currentInput = ""; 
            displayOutput.value = "0"; 
            displayOutput.scrollLeft = displayOutput.scrollWidth;
            console.log("clear btn clicked");

        } else if (btnText === "Del") { 
            currentInput = currentInput.slice(0, -1);                                       // remove last
            displayOutput.value = currentInput || "0";                                      
            displayOutput.scrollLeft = displayOutput.scrollWidth;
            console.log("del btn clicked");

        } else if (btnText === "+/-") {                                                     // toggle sign
            if (currentInput !== "") {
                currentInput = (-1 * parseFloat(currentInput)).toString();                  // multiply by -1
                displayOutput.value = currentInput;
                displayOutput.scrollLeft = displayOutput.scrollWidth;
            }

        } else { 
            currentInput += btnText;                                                        // add to input string
            displayOutput.value = currentInput;                                             // update screen
            console.log(`on calcy btn is clicked: ${btnText}`);
            displayOutput.scrollLeft = displayOutput.scrollWidth; 
        }
    });
});
