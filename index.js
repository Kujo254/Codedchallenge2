// select elements from html
const form = document.getElementById('guest-form');
const guestNameInput = document.getElementById('guest-name');
const guestCategorySelect = document.getElementById('guest-category');
const guestList = document.getElementById('guest-list');

// handle the form submission
form.addEventListener('submit', function (event) {
  event.preventDefault();//prevent page reload
  const name = guestNameInput.value.trim();
  const category = guestCategorySelect.value;
  //create,add and categorizes list item
  const listItem = document.createElement('li');
  listItem.textContent = `${name} (${category})`;
  guestList.appendChild(listItem);
    //clear the input area
      guestNameInput.value = '';
