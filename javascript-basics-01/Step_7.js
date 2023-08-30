document.addEventListener("DOMContentLoaded", function() {
    var validateButton = document.getElementById("validate");
    validateButton.addEventListener("click", function(event) {
        event.preventDefault();
        var shoeSize = document.getElementById("shoe_size").value;
        var birthYear = document.getElementById("year").value;
        shoeSize = parseFloat(shoeSize);
        birthYear = parseInt(birthYear);
        if (isNaN(shoeSize) || isNaN(birthYear)) {
            alert("Please enter valid numbers.");
            return;
        }
        var result = calculateResult(shoeSize, birthYear);
        alert("The result : " + result);
    });
});

function calculateResult(shoeSize, birthYear) {
    return ((shoeSize * 2) + 5) * 50 - birthYear + 1766;
}