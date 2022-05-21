// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

// console.log('This is the JavaScript entry file - your code begins here.');

//API FETCH
function getAllUserData(data) {
      // console.log(users)
      globalUserData = data;
      globalUserRepository = new UserRepository(data);
      // console.log(users.userData)
      getUserName();

}

function getAllHydrationData(data) {

  globalHydrationData = data;
  // console.log(globalHydrationData)
  globalHydration = new Hydration(data);
}

function getAllData() {

  let foo = ['https://fitlit-api.herokuapp.com/api/v1/users', 'https://fitlit-api.herokuapp.com/api/v1/hydration',
  'https://fitlit-api.herokuapp.com/api/v1/activity', 'https://fitlit-api.herokuapp.com/api/v1/sleep'];
  let fooArr = foo.map((url) => {
    return fetch(url).then(res => res.json());
  });



  Promise.all(fooArr).then((value) => {
    console.log(value);
    getAllHydrationData(value[1].hydrationData);
    getAllUserData(value[0].userData);
    console.log(value[2])
  });

}

// GLOBAL VARIABLES
let globalUserRepository;
let globalUserData;
let globalHydrationData;
let globalHydration;


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
var todaysHydration = document.querySelector('#todaysHydration');
var weeklyHydration = document.querySelector('#weeklyHydration');

// EVENT LISTENERS
window.addEventListener('load', function() {
  // getAllUserData()
  // getAllHydrationData()
  getAllData()
});

// FUNCTIONS
function getUserName() {
  let newId = getRandomUserId(globalUserData);
  let newUser = globalUserRepository.getUserDataBasedOnId(newId);
  let newUserFirstName = newUser.returnUserFirstName();
  welcomeText.innerText = `Welcome, ${newUserFirstName}!`;
  displayIdCardInfo(newUser);
  displayStepsInfo(newUser);
  displayHydrationInfo(newUser)
}
function displayHydrationInfo(newUser) {
  let hydrationId = globalHydration.obtainHydrationDataBasedOnId(newUser.id);
  let hydrationDaily = globalHydration.obtainOuncesForMostRecentDay(hydrationId);
  let hydrationWeekly = globalHydration.obtainOuncesPerDayOverAWeek(hydrationId);
  todaysHydration.innerText += `${hydrationDaily}`
  weeklyHydration.innerText += `${hydrationWeekly}`
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

function getRandomUserId(anyUserDataArr) {
  return anyUserDataArr[Math.floor(Math.random() * anyUserDataArr.length)].id;
}

// An example of how you tell webpack to use a JS file
// import userData from './data/users';
import UserRepository from './UserRepository';
import Hydration from './Hydration';
