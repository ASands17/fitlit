//IMPORTS
import UserRepository from './UserRepository';
import Hydration from './Hydration';
import Sleep from './Sleep';
import './css/styles.css';
import './images/profile-icon.png';

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
  globalUserData = data;
  globalUserRepository = new UserRepository(data);
}

function getAllHydrationData(data) {
  globalHydrationData = data;
  globalHydration = new Hydration(data);
}

function getAllSleepData(data) {
  globalSleepData = data;
  globalSleep = new Sleep(data);
  getUserName();
}

function fetchAllData() {
  let apis = [
    'https://fitlit-api.herokuapp.com/api/v1/users',
    'https://fitlit-api.herokuapp.com/api/v1/hydration',
    'https://fitlit-api.herokuapp.com/api/v1/activity',
    'https://fitlit-api.herokuapp.com/api/v1/sleep'
  ];

  let endpoints = apis.map((url) => {
    return fetch(url)
    .then(res => res.json())
    .catch(error => console.log("fetch error", error));
  });

  Promise.all(endpoints).then((value) => {
    getAllUserData(value[0].userData);
    getAllHydrationData(value[1].hydrationData);
    getAllSleepData(value[3].sleepData);
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
  let sleepId = globalSleep.acquireSleepDataBasedOnId(newUser.id);
  let hoursArr = sleepId.map(daySleep => {
    return daySleep.hoursSlept
  })

  let averageHoursDom = globalSleep.acquireAverageMetricPerDay(hoursArr);
  averageHours.innerText += ` ${averageHoursDom}`;

  let qualityArr = sleepId.map(daySleep => {
    return daySleep.sleepQuality
  })

  let averageQualityDom = globalSleep.acquireAverageMetricPerDay(qualityArr);
  console.log('avgquality', averageQualityDom)
  averageQuality.innerText += ` ${averageQualityDom}`;
  let lastIndexNum = [sleepId.length - 1];
  let indexOfBigData = (sleepId[lastIndexNum]);
  let finalIndexDate = indexOfBigData.date;
  let todaysHoursDom = globalSleep.acquireHoursSleptForASpecificDay(sleepId, finalIndexDate);
  todaysHours.innerText += ` ${todaysHoursDom}`;
  let todaysQualityDom = globalSleep.acquireSleepQualityForASpecificDay(sleepId, finalIndexDate);
  todaysQuality.innerText += ` ${todaysQualityDom}`;

  let lastWeekHoursDom = globalSleep.acquireHoursSleptEachDayForAWeek(sleepId, finalIndexDate);
  var allFixedDisplayObjects = good(lastWeekHoursDom, 'Hours: ')
  let noCommas = allFixedDisplayObjects.join("<br />");
  lastWeeksHours.innerHTML += `<br> ${noCommas}`

  let lastWeekQualityDom = globalSleep.acquireSleepQualityEachDayForAWeek(sleepId, finalIndexDate);
  var sleepObjectsDom = good(lastWeekQualityDom, 'Quality: ')
  let noCommas2 = sleepObjectsDom.join("<br />");
  lastWeeksQuality.innerHTML += `<br>${noCommas2}`
}

function good(arr, dataType) {
  console.log(arr)
  var final2 = arr.map(ele => {
    let strings = JSON.stringify(ele)
    .replace(/[{}]/g,'')
    .replace(/['"]/g,'')
    return strings
  });
  let thing = final2.map(oneDate => {
    let myArray = oneDate.split(":");
    let interp;
    let date = myArray[0];
    let [year, month, day] = date.split('/');
    let result = [month, day, year].join('/');
    interp = "Date:  " + result + '\xa0\xa0\xa0\xa0\xa0\xa0' + dataType + myArray[1];
    console.log(interp)

    return interp;
  })
  return thing
}


function displayHydrationInfo(newUser) {
  let hydrationId = globalHydration.obtainHydrationDataBasedOnId(newUser.id);
  let hydrationDaily = globalHydration.obtainOuncesForMostRecentDay(hydrationId);
  let hydrationWeekly = globalHydration.obtainOuncesPerDayOverAWeek(hydrationId);
  todaysHydration.innerText += ` ${hydrationDaily} ounces`;
  var hydrationObjectsDom = good(hydrationWeekly, 'Ounces: ')
  let noCommas3 = hydrationObjectsDom.join("<br />");
  weeklyHydration.innerHTML += `<br>${noCommas3}`;
}

function displayIdCardInfo(newUser) {
  idText.innerText += ` ${newUser.id}`;
  nameText.innerText += ` ${newUser.name}`;
  addressText.innerText += ` ${newUser.address}`;
  emailText.innerText += ` ${newUser.email}`;
  strideLengthText.innerText += ` ${newUser.strideLength}`;
  dailyStepGoalText.innerText += ` ${newUser.dailyStepGoal}`;
  var userFriend = newUser.friends.map(friend => {
    return friend = globalUserRepository.getUserDataBasedOnId(friend)
  });
  let userFriendNames = userFriend.map(friend => {
    return friend.returnUserFirstName()
  });
  let friendsSpace = userFriendNames.join(", ");
  friendsText.innerText += '\xa0' + friendsSpace;
}

function displayStepsInfo(newUser) {
  yourStepGoal.innerText += ` ${newUser.dailyStepGoal}`;
  let aveStepGoal = globalUserRepository.getAveStepGoalOfAllUsers();
  averageUsersStepGoal.innerText += ` ${aveStepGoal}`;
}

function getRandomUserId(anyUserData) {
  return anyUserData[Math.floor(Math.random()*anyUserData.length)].id;
}
