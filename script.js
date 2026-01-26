// Get references to DOM elements for manipulation
const numberInput = document.getElementById('numberInput');
const checkButton = document.getElementById('checkButton');
const resultDisplay = document.getElementById('result');
const errorMessage = document.getElementById('errorMessage');

// Main function to check if a number is odd or even
function checkOddEven() {
    // Get the input value and remove any whitespace
    const inputValue = numberInput.value.trim();
    
    // Clear previous results and error states
    resetDisplay();
    
    // Validate the input before processing
    if (!isValidInput(inputValue)) {
        showError('Please enter a valid number');
        return;
    }
    
    // Convert the string input to an integer
    const number = parseInt(inputValue, 10);
    
    // Determine if the number is odd or even using modulo operator
    // A number is even if it's divisible by 2 (remainder is 0)
    const isEven = number % 2 === 0;
    
    // Display the result with appropriate styling
    displayResult(number, isEven);
}

// Validates user input to ensure it's a proper number
function isValidInput(value) {
    // Check if input is empty
    if (value === '') {
        return false;
    }
    
    // Check if input is a valid number
    const num = Number(value);
    if (isNaN(num)) {
        return false;
    }
    
    return true;
}

// Displays error message and adds error styling to input field
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    numberInput.classList.add('error');
    
    // Remove error styling after a short delay
    setTimeout(() => {
        numberInput.classList.remove('error');
    }, 400);
}

// Displays the result with smooth animation
function displayResult(number, isEven) {
    const resultType = isEven ? 'even' : 'odd';
    const resultText = isEven ? 'Even Number' : 'Odd Number';
    
    // Update the result display with formatted content
    resultDisplay.innerHTML = `
        <span class="result-number">${number}</span>
        <span class="result-text">is an ${resultText}</span>
    `;
    
    // Add appropriate class for styling
    resultDisplay.classList.add(resultType);
    
    // Trigger the show animation
    setTimeout(() => {
        resultDisplay.classList.add('show');
    }, 10);
}

// Resets all display states to prepare for new input
function resetDisplay() {
    // Clear error state
    errorMessage.classList.remove('show');
    errorMessage.textContent = '';
    
    // Clear previous result
    resultDisplay.classList.remove('show', 'even', 'odd');
    resultDisplay.innerHTML = '';
}

// Event listener for the check button
checkButton.addEventListener('click', checkOddEven);

// Event listener for Enter key press in the input field
numberInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkOddEven();
    }
});

// Clear result when user starts typing a new number
numberInput.addEventListener('input', () => {
    if (resultDisplay.classList.contains('show')) {
        resetDisplay();
    }
});

// Focus on input field when page loads for better user experience
window.addEventListener('load', () => {
    numberInput.focus();
});
