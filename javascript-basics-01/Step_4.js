document.addEventListener("DOMContentLoaded", function() {
    var validateButton = document.getElementById("validate");

    validateButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission

      
        var name = document.getElementById("name").value;
        var surname = document.getElementById("surname").value;
        var city = document.getElementById("city").value;

        
        alert("Hello, " + name + " " + surname + " from " + city);
    });
});
