//IMPORTS
// An example of how you tell webpack to use a JS file
import UserRepository from './UserRepository';
import Hydration from './Hydration';
import Sleep from './Sleep';
// An example of how you tell webpack to use a CSS file
import './css/styles.css';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

//GLOBAL VARIABLES
let globalUserRepository;
let globalUserData;
let globalHydrationData;
let globalHydration;
let globalSleepData;
let globalSleep;

//QUERY SELECTORS
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
var averageHours = document.querySelector('#averageHours');
var averageQuality = document.querySelector('#averageQuality');
var todaysHours = document.querySelector('#todaysHours');
var todaysQuality = document.querySelector('#todaysQuality');
var lastWeeksHours = document.querySelector('#lastWeeksHours');
var lastWeeksQuality = document.querySelector('#lastWeeksQuality');

//EVENT LISTENERS
window.addEventListener('load', fetchAllData);

//API FETCH
function getAllUserData(data) {
  // console.log(users)
  globalUserData = data;
  globalUserRepository = new UserRepository(data);
  // console.log(users.userData)
}

function getAllHydrationData(data) {
  globalHydrationData = data;
  // console.log(globalHydrationData)
  globalHydration = new Hydration(data);
}

function getAllSleepData(data) {
  globalSleepData = data;
  // console.log(globalSleepData);
  globalSleep = new Sleep(data);
  getUserName();
}

function fetchAllData() {
  let apis = ['https://fitlit-api.herokuapp.com/api/v1/users', 'https://fitlit-api.herokuapp.com/api/v1/hydration',
  'https://fitlit-api.herokuapp.com/api/v1/activity', 'https://fitlit-api.herokuapp.com/api/v1/sleep'];

  let endpoints = apis.map((url) => {
    return fetch(url)
    .then(res => res.json())
    .catch(error => console.log("fetch call error", error));
  });

  Promise.all(endpoints).then((value) => {
    // console.log(value);
    getAllUserData(value[0].userData);
    getAllHydrationData(value[1].hydrationData);
    getAllSleepData(value[3].sleepData);
    // console.log(value[3]);
  });
}


//FUNCTIONS
function getUserName() {
  let newId = getRandomUserId(globalUserData);
  let newUser = globalUserRepository.getUserDataBasedOnId(newId);
  let newUserFirstName = newUser.returnUserFirstName();
  welcomeText.innerText = `Welcome, ${newUserFirstName}!`;
  displayIdCardInfo(newUser);
  displayStepsInfo(newUser);
  displayHydrationInfo(newUser);
  displaySleepInfo(newUser);
}

function displaySleepInfo(newUser) {
  // var averageHours = document.querySelector('#averageHours');
  // var averageQuality = document.querySelector('#averageQuality');
  // var todaysHours = document.querySelector('#todaysHours');
  // var todaysQuality = document.querySelector('#todaysQuality');
  // var lastWeeksHours = document.querySelector('#lastWeeksHours');
  // var lastWeeksQuality = document.querySelector('#lastWeeksQuality');
  // todaysHours.innerText += "hello"
  console.log(newUser)
  let sleepId = globalSleep.acquireSleepDataBasedOnId(newUser.id);
  let averageHoursDom = globalSleep.acquireAvgHoursSleptPerDay(sleepId);
  averageHours.innerText += ` ${averageHoursDom}`;

  let averageQualityDom = globalSleep.acquireAvgSleepQualityPerDay(sleepId);
  averageQuality.innerText += ` ${averageQualityDom}`;

  let lastIndexNum = [sleepId.length - 1];
  let indexOfBigData = (sleepId[lastIndexNum]);
  // console.log(indexOfBigData.numOunces);
  let finalIndexDate = indexOfBigData.date;
  console.log(finalIndexDate)


  let todaysHoursDom = globalSleep.acquireHoursSleptForASpecificDay(sleepId, finalIndexDate);
  todaysHours.innerText += ` ${todaysHoursDom}`;
  console.log(todaysHoursDom)

  let todaysQualityDom = globalSleep.acquireSleepQualityForASpecificDay(sleepId, finalIndexDate);
  todaysQuality.innerText += ` ${todaysQualityDom}`;
  console.log(todaysQualityDom)

  let lastWeekHoursDom = globalSleep.acquireHoursSleptEachDayForAWeek(sleepId, finalIndexDate);
  lastWeeksHours.innerText += ` ${lastWeekHoursDom}`;
  console.log(lastWeekHoursDom)

  let lastWeekQualityDom = globalSleep.acquireSleepQualityEachDayForAWeek(sleepId, finalIndexDate);
  lastWeeksQuality.innerText += ` ${lastWeekQualityDom}`;
  console.log(lastWeekQualityDom)
}

function displayHydrationInfo(newUser) {
  let hydrationId = globalHydration.obtainHydrationDataBasedOnId(newUser.id);
  console.log(hydrationId)
  let hydrationDaily = globalHydration.obtainOuncesForMostRecentDay(hydrationId);
  console.log(hydrationDaily)
  let hydrationWeekly = globalHydration.obtainOuncesPerDayOverAWeek(hydrationId);
  todaysHydration.innerText += ` ${hydrationDaily}`;
  weeklyHydration.innerText += ` ${hydrationWeekly}`;
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

function getRandomUserId(anyUserData) {
  return anyUserData[Math.floor(Math.random()*anyUserData.length)].id;
}
