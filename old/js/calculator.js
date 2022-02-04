$(function () {

    // Her bruker jeg querySelector som er det samme som getElementById og getElementsByClassName
    // Forskjellen er at jeg kan velge mellom ID og class ved å bruke # eller .
    const output = document.querySelector("#output");

    let buttons = document.querySelectorAll("#buttons span");
    buttons.forEach(button => {

        // Når jeg trykker på et tall (buttons)
        button.onclick = function () {
            output.value += button.innerHTML;
        }

    })

    let operatorButtons = document.querySelectorAll("#operators span");
    operatorButtons.forEach(operatorButton => {

        operatorButton.onclick = function () {
            // Når jeg trykker på en operator:
            let operator = operatorButton.innerHTML;
            output.value += operator;
        }

    })

    document.querySelector("#calculate").onclick = function () {
        output.value = eval(output.value);
    }

    document.querySelector("#reset").onclick = function() {
        output.value = "";
    }

})