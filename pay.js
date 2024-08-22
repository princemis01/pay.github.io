function calculatePay() {
    // Get the input values from the HTML elements
    var hours = document.getElementById('hours').value;
    var rate = document.getElementById('pay').value;

    // Calculate the total pay by multiplying hours and rate
    var totalPay = hours * rate;

    // Display the calculated total pay in the 'result' input field, formatted to 2 decimal places
    document.getElementById('result').value = totalPay.toFixed(2);
}
