const root = document.getElementById('root');

const shoppingList = [];

// Create the form element
const form = document.createElement('form');

// Create the input element
const input = document.createElement('input');
input.type = 'text';

// Create the Add Item button
const addItemButton = document.createElement('button');
addItemButton.textContent = 'Add Item';

// Add the input and button to the form
form.appendChild(input);
form.appendChild(addItemButton);

// Add the form to the root element
root.appendChild(form);

// Add an event listener to the form
form.addEventListener('submit', event => {
  // Prevent the form from being submitted
  event.preventDefault();

  // Get the value of the input element
  const item = input.value;

  // Add the item to the shopping list
  shoppingList.push(item);

  // Clear the input
  input.value = '';

  // Log the shopping list to the console
  console.log(shoppingList);
});


const clearAllButton = document.createElement('button');
clearAllButton.textContent = 'Clear All';

// Add the Clear All button to the form
form.appendChild(clearAllButton);

// Add an event listener to the Clear All button
clearAllButton.addEventListener('click', () => {
  // Clear the shopping list
  shoppingList.length = 0;

  // Log the shopping list to the console
  console.log(shoppingList);
});
