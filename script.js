const numberInput = document.getElementById('numberInput');
const checkButton = document.getElementById('checkButton');
const resultDisplay = document.getElementById('result');
const errorMessage = document.getElementById('errorMessage');

function checkOddEven() {
    const inputValue = numberInput.value.trim();

    resetDisplay();

    if (!isValidInput(inputValue)) {
        showError('Please enter a valid number');
        return;
    }

    const number = parseInt(inputValue, 10);
    const isEven = number % 2 === 0;

    displayResult(number, isEven);
}

function isValidInput(value) {
    if (value === '') {
        return false;
    }

    const num = Number(value);
    if (isNaN(num)) {
        return false;
    }

    return true;
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    numberInput.classList.add('error');

    // 400ms matches the shake animation duration defined in style.css
    setTimeout(() => {
        numberInput.classList.remove('error');
    }, 400);
}

function displayResult(number, isEven) {
    const resultType = isEven ? 'even' : 'odd';
    const resultText = isEven ? 'Even Number' : 'Odd Number';

    resultDisplay.innerHTML = `
        <span class="result-number">${number}</span>
        <span class="result-text">is an ${resultText}</span>
    `;

    resultDisplay.classList.add(resultType);

    // deferred by one paint cycle so the browser registers the initial opacity before transitioning
    setTimeout(() => {
        resultDisplay.classList.add('show');
    }, 10);
}

function resetDisplay() {
    errorMessage.classList.remove('show');
    errorMessage.textContent = '';

    resultDisplay.classList.remove('show', 'even', 'odd');
    resultDisplay.innerHTML = '';
}

checkButton.addEventListener('click', checkOddEven);

numberInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkOddEven();
    }
});

numberInput.addEventListener('input', () => {
    if (resultDisplay.classList.contains('show')) {
        resetDisplay();
    }
});

window.addEventListener('load', () => {
    numberInput.focus();
});

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
    numberInput.value = '';
    resetDisplay();
    numberInput.focus();
});
