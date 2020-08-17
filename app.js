const { checkAndGenerate, createElement } = require('./util');
const {getUserName} = require('./user');

const initApp = () => {
  // Initializes the app, registers the button click listener
  const newUserButton = document.querySelector('#btnAddUser');
  newUserButton.addEventListener('click', addUser);
  appendUserName();
};

const addUser = () => {
  // Fetches the user input, creates a new HTML element based on it
  // and appends the element to the DOM
  const newUserNameInput = document.querySelector('input#name');
  const newUserAgeInput = document.querySelector('input#age');

  const outputText = checkAndGenerate(
    newUserNameInput.value,
    newUserAgeInput.value
  );

  if (!outputText) {
    return;
  }

  const userList = document.querySelector('.user-list');
  const element = createElement('li', outputText, 'user-item');
  userList.appendChild(element);
};

const appendUserName = () => {
  const newUserName = document.querySelector('#username');
  getUserName(1).then(name =>  newUserName.innerHTML = name); 
}

// Start the app!
initApp();
