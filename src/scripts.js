//IMPORTS
import UserRepository from './UserRepository';
import Hydration from './Hydration';
import Sleep from './Sleep';
import './css/styles.css';
import './images/profile-icon.png';
import {fetchAllData} from './apiCalls';

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
window.addEventListener('load', displayResolvedData);

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

function displayResolvedData() {
  fetchAllData()
  .then((allData) => {
    getAllUserData(allData[0].userData);
    getAllHydrationData(allData[1].hydrationData);
    getAllSleepData(allData[3].sleepData);
  })
}

//FUNCTIONS
function getUserName() {
  let newId = getRandomUserId(globalUserData);
  let newUser = globalUserRepository.getDataById(newId);
  let newUserFirstName = newUser.returnUserFirstName();
  welcomeText.innerText = `Welcome, ${newUserFirstName}! 🤗`;
  displayIdCardInfo(newUser);
  displayStepsInfo(newUser);
  displayHydrationInfo(newUser);
  displaySleepInfo(newUser);
}

function displaySleepInfo(newUser) {
  let userSleepData = globalSleep.acquireSleepDataById(newUser.id);
  let todaysDate = editDate(userSleepData);
  displayAveHours(userSleepData);
  displayAveQuality(userSleepData);
  displayDailySleepMetrics(userSleepData, todaysDate);
  displayWeeklySleepMetrics(userSleepData, todaysDate);
}

function editDate(userSleepData) {
  let lastIndex = [userSleepData.length - 1];
  let todaysData = (userSleepData[lastIndex]);
  return todaysData.date;
}

function displayAveHours(userSleepData) {
  let hoursCollection = userSleepData.map(daySleep => daySleep.hoursSlept);
  let averageHoursDom = globalSleep.acquireAverageDailyMetric(hoursCollection);
  averageHours.innerHTML += ` <i style='font-weight: 300'>${averageHoursDom}<i>`;
}

function displayAveQuality(userSleepData) {
  let qualityCollection = userSleepData.map(daySleep => daySleep.sleepQuality);
  let averageQualityDom = globalSleep.acquireAverageDailyMetric(qualityCollection);
  averageQuality.innerHTML += ` <i style='font-weight: 300'>${averageQualityDom}<i>`;
}

function displayDailySleepMetrics(userSleepData, todaysDate) {
  let todaysHoursDom = globalSleep.acquireDailyHoursSlept(userSleepData, todaysDate);
  todaysHours.innerHTML += ` <i style='font-weight: 300'>${todaysHoursDom}<i>`;
  let todaysQualityDom = globalSleep.acquireDailySleepQuality(userSleepData, todaysDate);
  todaysQuality.innerHTML += ` <i style='font-weight: 300'>${todaysQualityDom}<i>`;
}

function displayWeeklySleepMetrics(userSleepData, todaysDate) {
  let lastWeekHoursDom = globalSleep.acquireWeeklyHoursSlept(userSleepData, todaysDate);
  var hoursDisplay = parseDate(lastWeekHoursDom, 'Hours: ');
  let replacedCommaHours = hoursDisplay.join("<br />");
  lastWeeksHours.innerHTML += `<br> ${replacedCommaHours}`;
  let lastWeekQualityDom = globalSleep.acquireWeeklySleepQuality(userSleepData, todaysDate);
  var qualityDisplay = parseDate(lastWeekQualityDom, 'Quality: ');
  let replacedCommaQuality = qualityDisplay.join("<br />");
  lastWeeksQuality.innerHTML += `<br>${replacedCommaQuality}`;
}

function parseDate(dates, metric) {
  var dateStrings = dates.map(date => {
    let strings = JSON.stringify(date)
    .replace(/[{}]/g,'')
    .replace(/['"]/g,'');
    return strings;
  });
  let parsedDates = dateStrings.map(oneDate => {
    let splitDates = oneDate.split(":");
    let finalDate;
    let date = splitDates[0];
    let [year, month, day] = date.split('/');
    let joinedDate = [month, day, year].join('/');
    finalDate = "<b>Date:  </b>" + joinedDate + '\xa0\xa0\xa0\xa0\xa0\xa0' + `<b>${metric}</b>` + splitDates[1];
    return finalDate;
  })
  return parsedDates;
}

function displayHydrationInfo(newUser) {
  let userHydrationData = globalHydration.obtainHydrationDataById(newUser.id);
  let hydrationDaily = globalHydration.obtainTodaysOunces(userHydrationData);
  let hydrationWeekly = globalHydration.obtainWeeklyOunces(userHydrationData);
  todaysHydration.innerHTML += `<i style='font-weight: 300'> ${hydrationDaily} ounces<i>`;
  var hydrationObjectsDom = parseDate(hydrationWeekly, 'Ounces: ');
  let replacedCommaOunces = hydrationObjectsDom.join("<br />");
  weeklyHydration.innerHTML += `<br>${replacedCommaOunces}`;
}

function displayIdCardInfo(newUser) {
  nameText.innerHTML += ` <i style='font-weight: 300'>${newUser.name}<i>`;
  addressText.innerHTML += ` <i style='font-weight: 300'>${newUser.address}<i>`;
  emailText.innerHTML += ` <i style='font-weight: 300'>${newUser.email}<i>`;
  strideLengthText.innerHTML += ` <i style='font-weight: 300'>${newUser.strideLength}<i>`;
  dailyStepGoalText.innerHTML += ` <i style='font-weight: 300'>${newUser.dailyStepGoal}<i>`;
  var userFriend = newUser.friends.map(friend => {
    let friendData = globalUserRepository.getDataById(friend);
    let friendName = friendData.returnUserFirstName();
    return friendName;
  });
  let friendsSpace = userFriend.join(", ");
  friendsText.innerHTML += `<i style='font-weight: 300'> ${friendsSpace}<i>`;
}

function displayStepsInfo(newUser) {
  yourStepGoal.innerHTML += `<i style='font-weight: 300'> ${newUser.dailyStepGoal}</i>`;
  let aveStepGoal = globalUserRepository.getAveStepGoalOfAllUsers();
  averageUsersStepGoal.innerHTML += `<i style='font-weight: 300'> ${aveStepGoal}</i>`;
}

function getRandomUserId(anyUserData) {
  return anyUserData[Math.floor(Math.random()*anyUserData.length)].id;
}
