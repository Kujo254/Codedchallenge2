// select elements from html
const form = document.getElementById('guest-form');
const guestNameInput = document.getElementById('guest-name');
const guestCategorySelect = document.getElementById('guest-category');
const guestList = document.getElementById('guest-list');

// handle the form submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); // prevent page reload

  // checking space availability
  const currentGuestCount = guestList.children.length;
  if (currentGuestCount >= 10) {
    alert('Guest list is full. Please remove a guest before adding another.');
    return;
  }

  const name = guestNameInput.value.trim();
  const category = guestCategorySelect.value;

  if (name === '') return;

  // create the list item
  const listItem = document.createElement('li');
  listItem.textContent = name;

  // category tag
  const tag = document.createElement('span');
  tag.textContent = ` ${category}`;
  tag.style.marginLeft = '8px';
  tag.style.padding = '2px 6px';
  tag.style.borderRadius = '4px';
  tag.style.fontSize = '12px';
  tag.style.color = 'white';

  if (category === 'Friend') {
    tag.style.backgroundColor = 'blue';
  } else if (category === 'Family') {
    tag.style.backgroundColor = 'green';
  } else if (category === 'Colleague') {
    tag.style.backgroundColor = 'purple';
  }

  // timestamp
  const timestamp = document.createElement('span');
  timestamp.textContent = ` Added: ${new Date().toLocaleTimeString()}`;
  timestamp.style.marginLeft = '10px';
  timestamp.style.fontSize = '12px';
  timestamp.style.color = 'gray';

  // RSVP toggle button
  const rsvpButton = document.createElement('button');
  rsvpButton.textContent = 'Attending';
  rsvpButton.style.marginLeft = '10px';
  rsvpButton.addEventListener('click', function () {
    rsvpButton.textContent =
      rsvpButton.textContent === 'Attending' ? 'Not Attending' : 'Attending';
  });

  // edit button
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.style.marginLeft = '10px';
  editButton.addEventListener('click', function () {
    const newName = prompt('Enter the new name:', name);
    if (newName && newName.trim() !== '') {
      listItem.firstChild.textContent = newName.trim();
    }
  });

  // remove button
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.style.marginLeft = '10px';
  removeButton.addEventListener('click', function () {
    guestList.removeChild(listItem);
  });

  // append everything to the list item
  listItem.appendChild(tag);
  listItem.appendChild(timestamp);
  listItem.appendChild(rsvpButton);
  listItem.appendChild(editButton);
  listItem.appendChild(removeButton);

  // add list item to the guest list
  guestList.appendChild(listItem);

  // clear the input area
  guestNameInput.value = '';
  guestCategorySelect.value = 'Friend';
  guestNameInput.focus();
});
