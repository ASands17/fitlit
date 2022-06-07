class Activity {
  constructor(activityDataAll, userData) {
    this.userData = userData;
    this.activityData = activityDataAll;
  }

  getActivityDataById(id) {
    let activityDataById = this.activityData.filter((data) => {
      return data.userID === id;
    });
    return activityDataById;
  }

  getStrideLengthById(id) {
    let strideById = this.userData.filter((user) => {
      return user.id === id;
    });
    return strideById[0].strideLength;
  }

  getDailyMilesWalked(date, id) {
    let userActivityAll = this.getActivityDataById(id);
    let userActivityDay = userActivityAll.filter((activity) => activity.date === date)[0];
    let strideLength = this.getStrideLengthById(id);
    let distanceWalkedInFeet = userActivityDay.numSteps * strideLength;
    let dailyMiles = distanceWalkedInFeet / 5280;
    return dailyMiles.toFixed(1);
  }

  getDailyMinutesActive(date, id) {
    let userActivityAll = this.getActivityDataById(id);
    let userActivityDay = userActivityAll.filter((activity) => activity.date === date)[0];
    return userActivityDay.minutesActive;
  }
}

export default Activity;
