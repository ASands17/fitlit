
class Sleep{
  constructor(sleepData) {
    this.data = sleepData;
    // this.id = id;
    //parameter for date?
    //Might need id
  }

  acquireSleepDataBasedOnId(id) {
    let sleepData = this.data.filter((snooze) => {
      return snooze.userID === id;
    });
    return sleepData;
  }

  acquireAvgHoursSleptForAllData(sleepData) {
   let totalHours = sleepData.reduce((total, day) => {
     total += day.hoursSlept;
     return total;
   }, 0);
   let aveHours = totalHours / sleepData.length;
   return Number(aveHours.toFixed(2));
  }

  acquireAvgSleepQualityForAllData(sleepData) {
    let totalQuality = sleepData.reduce((total, day) => {
      total += day.sleepQuality;
      return total;
    }, 0);
    let aveQuality = totalQuality / sleepData.length;
    return Number(aveQuality.toFixed(2));
  }

  acquireAllUserDates(sleepDataForUser) {
    let sleepDatesForUser = sleepDataForUser.map(obj => {
      return obj.date;
    });
    // console.log('52', sleepDatesForUser)
    return sleepDatesForUser;
  }

  acquireHoursSleptForASpecificDay(date) {
    var data = [
      {
        "userID": 2,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "hoursSlept": 7.5,
        "sleepQuality": 3.5
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "hoursSlept": 8.4,
        "sleepQuality": 1.2
      },
    ]
    let sleepData = data.filter((snooze) => {
      return snooze.date === date;
    });
    // console.log('81', sleepData)
    // console.log('61', sleepData[0].hoursSlept)
    return sleepData[0].hoursSlept;
  }

  acquireSleepQualityForASpecificDay(date) {
  //also takes in date
  // For a user, their sleep quality for a specific day (identified by a date)
  var data = [
    {
      "userID": 2,
      "date": "2019/06/15",
      "hoursSlept": 6.1,
      "sleepQuality": 2.2
    },
    {
      "userID": 2,
      "date": "2019/06/16",
      "hoursSlept": 7.5,
      "sleepQuality": 3.5
    },
    {
      "userID": 2,
      "date": "2019/06/17",
      "hoursSlept": 8.4,
      "sleepQuality": 1.2
    },
  ]
  let sleepData = data.filter((snooze) => {
    return snooze.date === date;
  });
  // console.log('81', sleepData)
  console.log('61', sleepData[0].sleepQuality)
  return sleepData[0].sleepQuality;
  }

  acquireHoursSleptEachDayForAWeek() {
// For a user, how many hours slept each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
  }

  acquireSleepQualityEachDayForAWeek() {
// For a user, their sleep quality each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
  }

  acquireAvgSleepQualityAllUsers() {
  // per all users for all days
  // For all users, the average sleep quality

  }

}








export default Sleep;
