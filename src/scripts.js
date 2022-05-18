// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// function getRandomElement(array) {
//   return array[Math.floor(Math.random()*array.length)]
// };
// QUERY SELECTORS
var allUserDataCard = document.querySelector('#userData');
console.log(allUserDataCard)

// EVENT LISTENERS
// window.addEventListener('load', )

// FUNCTIONS

function getRandomUserId(userData) {
  return userData[Math.floor(Math.random()*userData.length)].id
};

// in this file, before we run getRandomUser(), we're going to
// create a new instance of UserRepository, using the Data
// from the API.
// var UR = new UserRepository(data)
// UR.getUserDataBasedOnId(id)

// An example of how you tell webpack to use a JS file

import userData from './data/users';

import UserRepository from './UserRepository';
