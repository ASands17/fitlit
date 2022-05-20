// hydrationData = [{id1}, {id2}, {id3},...{id50}, {id1}, {id2}, {id3},...{id50}, {id1}, {id2}, {id3},...{id50}]
//                         6/15/21                |        6/16/21               |     6/17/21

// userID
// date
// numOunces

//per userID
// the average fluid ounces consumed per day for all time

// how many fluid ounces they consumed for a specific day (identified by a date)

// how many fluid ounces of water consumed each day
//over the course of a week (7 days) - return the amount for each day

//hydration repo instance will hold all of data
//hydration repo for individual user?
//iterator method on dataset

// hydrationData = [{id1}, {id2}, {id3},...{id50}, {id1}, {id2}, {id3},...{id50}, {id1}, {id2}, {id3},...{id50}]
//                         6/15/21                |        6/16/21               |     6/17/21
//per userID
class UserHydration {
  constructor(hydrationDataObject) {
    this.userID = hydrationDataObject.userID;
    this.date = hydrationDataObject.date;
    this.numOunces = hydrationDataObject.numOunces;
  }

  obtainOuncesForMostRecentDay() {
    let hydro = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 31
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "numOunces": 68
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "numOunces": 92
      },
    ];

    let parsedDates = hydro.map(user => {
      user.date = Date.parse([user.date])
      return user
    });

    let mostRecentDayData = parsedDates.reduce((highest, user) => {
      if (highest.date > user.date) {
        return highest
      }
      return user
    });
    // console.log(mostRecentDayData.numOunces);
    return mostRecentDayData.numOunces;
  }

  obtainOuncesPerDayOverAWeek() {
    let hydro1 = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 31
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "numOunces": 68
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "numOunces": 92
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "numOunces": 40
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "numOunces": 50
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "numOunces": 45
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "numOunces": 20
      },
    ];

    let parsedDates = hydro1.map(user => {
      user.date = Date.parse([user.date]);
      return user;
    });

    let weeklyOunces = parsedDates.sort((a, b) => {
      return a.date - b.date;
    });
    // console.log(weeklyOunces)

    const slicedArray = weeklyOunces.slice(0, 7);

    var actualOunces = slicedArray.map(dayObj => {
      return dayObj.numOunces;
    });

    // console.log(actualOunces)
    
    //Add 10 more dates for round 2 of testing #rigorousAF



  }
}

export default UserHydration;
