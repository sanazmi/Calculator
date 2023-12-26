let screen = document.getElementById('screen');
let historyDiv = document.getElementById('history');
let buttons = document.querySelectorAll('button');
let screenValue = '';
let result = '';
let lastButton = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);

        if (isOperator(buttonText) && isOperator(lastButton)) {

            return;
        }

        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == '=') {
            result = eval(screenValue);
            historyDiv.innerHTML += `<div>${screenValue} = ${result}</div>`;
            screen.value = result;
            screenValue = result.toString();
        } else if (buttonText == '%') {
            screenValue = (eval(screenValue) / 100).toString();
            screen.value = screenValue;
        } else {
            screenValue += buttonText;
            screen.value = screenValue;

            if (!isNaN(buttonText)) {
                result = screenValue;
            }
        }

        lastButton = buttonText;
    });
}

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}