// Fahreheit to Celsius Convertor

// Event Listeners
document.getElementById('convert-btn').addEventListener ('click', convertTemp);

// Event Functions
function convertTemp() {
    // Input
    let input = document.getElementById('input').value;

    // Process
    let output = (input - 32) * (5/9);

    // Output
    document.getElementById('result').innerHTML = output;
}
   