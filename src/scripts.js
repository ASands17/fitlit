// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

//API FETCH

// function getAllData() {
//   var myData = fetch("https://fitlit-api.herokuapp.com/api/v1/users")
//   .then(response => response.json())
//   .then(data => data.userData))
//   return myData;
// }

// function getAllData() {
//   return fetch("https://fitlit-api.herokuapp.com/api/v1/users")
//   .then(response => return response.json())
//   .then(data => return data.userData)
// }

function getAllData() {
    return fetch('https://fitlit-api.herokuapp.com/api/v1/users')
        .then((response) => {
            return response.json().then((data) => {
                console.log('data', data);
                return data.userData;
            }).catch((err) => {
                console.log(err);
            })
        });
}



console.log(getAllData())

// var myData = fetch("https://fitlit-api.herokuapp.com/api/v1/users")
// .then(response => response.json())
// .then(data => console.log('data log', data))


//Ideas on how to get fetch request in fn
//We could have the fn inside of the myData var/ fetch call
//We could have fn contain fetch call


// var myNewData= fetch("https://opentdb.com/api.php?amount=1&category=27&type=multiple")
// .then (response => response.json())
// .then (data => {
// const triviaQuestion = data.results[0].question;
// console. log (triviaQuestion);
// // Add my triviaQuestion to the DOM
// addToDom(triviaQuestion):
// }). catch (error => {
// console. log (error);
// // Display on the DOM saying something broke. Try again
// later,
// })


// GLOBAL VARIABLES
let globalUserRepository = new UserRepository(userData);

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
window.addEventListener('load', getUserName);

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
import userData from './data/users';
import UserRepository from './UserRepository';
