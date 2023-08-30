const inputElement = document.querySelector('#name');
const displayDiv = document.querySelector('#displayDiv');
inputElement.addEventListener('input', function() {
    displayDiv.textContent = inputElement.value;
});