document.addEventListener("DOMContentLoaded", function() {
 
    document.getElementById("validate").addEventListener("click", function(event) {
      
        event.preventDefault();

       
        var firstNumber = parseFloat(document.getElementById("first_number").value);
        var secondNumber = parseFloat(document.getElementById("second_number").value);

        
        var result = firstNumber * secondNumber;


        alert("The result of : " + firstNumber + " * " + secondNumber + " = " + result);
    });
});