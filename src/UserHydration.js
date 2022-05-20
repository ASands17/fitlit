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

  obtainOuncesForOneSpecificDay() {

  }
  
  obtainOuncesPerDayOverAWeek() {

  }
}

export default UserHydration;