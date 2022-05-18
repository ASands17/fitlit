// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// GLOBAL VARIABLES
let globalUserRepository = new UserRepository(userData)

// QUERY SELECTORS
var allUserDataCard = document.querySelector('#userData');
var welcomeText = document.querySelector('#welcomeText')

// EVENT LISTENERS
window.addEventListener('load', getUserName)

// FUNCTIONS
function getUserName() {
  let newId = getRandomUserId(userData);
  let newUser = globalUserRepository.getUserDataBasedOnId(newId);
  let newUserFirstName = newUser.returnUserFirstName();
  welcomeText.innerText = `Welcome, ${newUserFirstName}!`;
  console.log(newUser.name)
  console.log(newUserFirstName)
}
// display user name

function getRandomUserId(userData) {
  return userData[Math.floor(Math.random()*userData.length)].id
};

// in this file, before we run getRandomUser(), we're going to
// create a new instance of UserRepository, using the Data
// from the API.
// var UR = new UserRepository(data)
// UR.getUserDataBasedOnId(id)

// make an instance of userRepo as a global variable
// in a new fn, invoke
// 1. getRandomUserId(userData)
// 2. userRepo.getUserDataBasedOnId(#)
// 3. innerText += user.name

// An example of how you tell webpack to use a JS file

import userData from './data/users';

import UserRepository from './UserRepository';
