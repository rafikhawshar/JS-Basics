const inputElement = document.querySelector('#name');
const displayDiv = document.createElement('div');
displayDiv.id = 'displayDiv';
document.body.appendChild(displayDiv);
inputElement.addEventListener('input', function() {
    displayDiv.textContent = inputElement.value;
});
