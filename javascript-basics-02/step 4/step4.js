
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const cityInput = document.querySelector('#city');

const resetButton = document.querySelector('button[name="button"]');

function resetFields() {
  nameInput.value = "";
  surnameInput.value = "";
  cityInput.value = "";
}


resetButton.addEventListener('click', function() {

  const userConfirmed = window.confirm('Are you sure you want to reset all fields?');

 
  if (userConfirmed) {
    resetFields();
  }
});
