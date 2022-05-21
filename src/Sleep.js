// For a user (identified by their userID), the average number of hours slept per day
// For a user, their average sleep quality per day over all time
// For a user, how many hours they slept for a specific day (identified by a date)
// For a user, their sleep quality for a specific day (identified by a date)
// For a user, how many hours slept each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
// For a user, their sleep quality each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
// For all users, the average sleep quality

// {
// "userID": 1,
// "date": "2019/06/15",
// "hoursSlept": 6.1,
// "sleepQuality": 2.2
// }

class Sleep{
  constructor(sleepData, id){
    this.data = sleepData;
    this.id = id;
    //parameter for date?
  }

  acquireAvgHoursSleptPerDay() {

  }

  acquireAvgSleepQualitForAllData() {

  }

  acquireHoursSleptForASpecificDay() {
  //takes in specific date to pull data

  }

  acquireSleepQualityForASpecificDay() {
  //also takes in date
  }

  acquireHoursSleptEachDayForAWeek() {

  }

  acquireSleepQualityEachDayForAWeek() {

  }

  acquireAvgSleepQualityAllUsers() {

  }

}








export default Sleep;
