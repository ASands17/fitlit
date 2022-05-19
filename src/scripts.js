// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

// console.log('This is the JavaScript entry file - your code begins here.');

//API FETCH
function getAllData() {
  return fetch('https://fitlit-api.herokuapp.com/api/v1/users')
    .then((response) => response.json())
    .then((data) => data.userData)
    .then((users) => {
      userData = users;
      globalUserRepository = new UserRepository(users);
    })
    .then(() => {
      getUserName();
    })
    .catch((err) => {
        console.log(err);
    })
}

// GLOBAL VARIABLES
let globalUserRepository;
let userData;

// QUERY SELECTORS
var welcomeText = document.querySelector('#welcomeText');
var idText = document.querySelector('#id');
var nameText = document.querySelector('#name');
var addressText = document.querySelector('#address');
var emailText = document.querySelector('#email');
var strideLengthText = document.querySelector('#strideLength');
var dailyStepGoalText = document.querySelector('#dailyStepGoal');
var friendsText = document.querySelector('#friends');
var yourStepGoal = document.querySelector('#yourStepGoal');
var averageUsersStepGoal = document.querySelector('#averageUsersStepGoal');

// EVENT LISTENERS
window.addEventListener('load', getAllData);

// FUNCTIONS
function getUserName() {
  let newId = getRandomUserId(userData);
  let newUser = globalUserRepository.getUserDataBasedOnId(newId);
  let newUserFirstName = newUser.returnUserFirstName();
  welcomeText.innerText = `Welcome, ${newUserFirstName}!`;
  displayIdCardInfo(newUser);
  displayStepsInfo(newUser);
}

function displayIdCardInfo(newUser) {
  idText.innerText += ` ${newUser.id}`;
  nameText.innerText += ` ${newUser.name}`;
  addressText.innerText += ` ${newUser.address}`;
  emailText.innerText += ` ${newUser.email}`;
  strideLengthText.innerText += ` ${newUser.strideLength}`;
  dailyStepGoalText.innerText += ` ${newUser.dailyStepGoal}`;
  friendsText.innerText += ` ${newUser.friends}`;
}

function displayStepsInfo(newUser) {
  yourStepGoal.innerText += ` ${newUser.dailyStepGoal}`;
  let aveStepGoal = globalUserRepository.getAveStepGoalOfAllUsers();
  averageUsersStepGoal.innerText += ` ${aveStepGoal}`;
}

function getRandomUserId(userData) {
  return userData[Math.floor(Math.random()*userData.length)].id;
}

// An example of how you tell webpack to use a JS file
// import userData from './data/users';
import UserRepository from './UserRepository';
