const nameInput = document.getElementById('nameInput');
const greetingDiv = document.getElementById('greeting');

nameInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const name = nameInput.value.trim();
        if (name) {
            greetingDiv.textContent = `Hello, ${name}! Welcome!`;
        } else {
            greetingDiv.textContent = '';
        }
    }
});

nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() === '') {
        greetingDiv.textContent = '';
    }
});


// Function to change the color of the colorBox div randomly when the button is clicked
function changeColor() {
    const colorBox = document.getElementById('colorBox');
    const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightgoldenrodyellow', 'lightpink', 'lightgray'];
    // Pick a random color different from the current one
    let newColor;
    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === colorBox.style.backgroundColor);
    colorBox.style.backgroundColor = newColor;
}


// Function to show a message in the buttonResult div when the button is clicked
function showMessage() {
    const resultDiv = document.getElementById('buttonResult');
    resultDiv.textContent = 'Button clicked! Hello from JavaScript.';
}