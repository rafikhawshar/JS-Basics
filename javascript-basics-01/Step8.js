document.addEventListener("DOMContentLoaded", function() {
    var validateButton = document.getElementById("validate");
    validateButton.addEventListener("click", function(event) {
        event.preventDefault();
        var age = document.getElementById("age").value;
        age = parseInt(age);
        if (isNaN(age)) {
            alert("Please enter a valid age.");
            return;
        }
        if (age > 18) {
            alert("You are over 18.");
        } else {
            alert("You are under 18.");
        }
    });
});