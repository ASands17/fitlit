
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
  // console.log('61', sleepData[0].sleepQuality)
  return sleepData[0].sleepQuality;
  }



  acquireHoursSleptEachDayForAWeek(date) {
    var data = [
      {
        "userID": 1,
        "date": "2019/06/13",
        "hoursSlept": 7.5,
        "sleepQuality": 3.5
      },
      {
        "userID": 1,
        "date": "2019/06/14",
        "hoursSlept": 8.4,
        "sleepQuality": 1.2
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "hoursSlept": 6.2,
        "sleepQuality": 2.2
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "hoursSlept": 6.3,
        "sleepQuality": 3.5
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "hoursSlept": 6.4,
        "sleepQuality": 1.2
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "hoursSlept": 7.5,
        "sleepQuality": 3.5
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "hoursSlept": 8.3,
        "sleepQuality": 1.2
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "hoursSlept": 8.4,
        "sleepQuality": 1.2
      },
      {
        "userID": 1,
        "date": "2019/06/22",
        "hoursSlept": 8.5,
        "sleepQuality": 1.2
      }
    ]

    let parsedDates = data.map(user => {
      user.date = Date.parse([user.date]);
      return user;
    });

    let newDate = Date.parse(date);
    let endDate = newDate + 604000000;

    let weeklyHours = parsedDates.sort((firstDate, secondDate) => {
      return firstDate.date - secondDate.date;
    });

    let daily = weeklyHours.filter(user => {
      if (user.date >= newDate && user.date <= endDate) {
        return user;
      }
    });

    let hoursSlept = daily.map(obj => {
      return obj.hoursSlept;
    });
    console.log('final hours', hoursSlept)
    // console.log('daily', daily)
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
