document.addEventListener("DOMContentLoaded", function() {
    var validateButton = document.getElementById("validate");
    validateButton.addEventListener("click", function(event) {
        event.preventDefault();
        var firstNumber = document.getElementById("first_number").value;
        var secondNumber = document.getElementById("second_number").value;
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);
        if (isNaN(firstNumber) || isNaN(secondNumber) || secondNumber === 0) {
            alert("Please enter valid numbers. The second number should not be zero.");
            return;
        }
        var remainder = firstNumber % secondNumber;
        alert("The remainder of the division is: " + remainder);
    });
});
