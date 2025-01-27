document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    let currentValue = '';
    let operator = '';
    let previousValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value >= '0' && value <= '9') {
                currentValue += value;
                display.value = currentValue;
            } else if (value === 'C') {
                currentValue = '';
                operator = '';
                previousValue = '';
                display.value = '';
            } else if (value === '=') {
                if (previousValue && currentValue && operator) {
                    currentValue = operate(parseFloat(previousValue), parseFloat(currentValue), operator);
                    display.value = currentValue;
                    previousValue = '';
                    operator = '';
                }
            } else {
                if (currentValue) {
                    if (previousValue && operator) {
                        currentValue = operate(parseFloat(previousValue), parseFloat(currentValue), operator);
                        display.value = currentValue;
                    }
                    previousValue = currentValue;
                    currentValue = '';
                    operator = value;
                }
            }
        });
    });

    function operate(a, b, op) {
        switch (op) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return b !== 0 ? a / b : 'Error';
            default:
                return b;
        }
    }
});