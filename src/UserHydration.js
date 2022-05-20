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
    console.log(mostRecentDayData.numOunces);
    return mostRecentDayData.numOunces;






    //Input: whole userHydration data userObj (all data for user)

    //reduce

      //change dates to #s

      // find object w/ highest # for date and return the obj

      //return numOz from that object


    //Output: oz for day



    //we need to use ID to get user 1
    //go into hydration data for user to pull oz for 1 day
    //how will this display on dom?? Dropdown of date? Calendar??
      //need dynamic code so it takes in last date available

  }

  obtainOuncesPerDayOverAWeek() {

  }
}

export default UserHydration;
