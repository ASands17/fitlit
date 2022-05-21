class Hydration {
  constructor(hydrationData, id) {
    this.data = hydrationData;
    this.id = id;
  }

  obtainHydrationDataBasedOnId(id) {
    let waterData = this.data.filter((hydro) => {
      // console.log("id", waterData.userID);
      return hydro.userID === id;
    })
    // console.log('waterData', waterData)
    // console.log("hydro", hydro);'
    return waterData;
  }

  obtainAveOuncesConsumedPerDay(waterData) {
    let totalOunces = waterData.reduce((total, day) => {
      total += day.numOunces;
      return total;
    }, 0)
    let aveOunces = totalOunces / waterData.length;
    // console.log("aveOunces", aveOunces)
    return Number(aveOunces.toFixed(2));
  }

  obtainOuncesForMostRecentDay(waterData) {
    let parsedDates = waterData.map(user => {
      user.date = Date.parse([user.date]);
      return user;
    });

    let mostRecentDayData = parsedDates.reduce((highestNum, user) => {
      if (highestNum.date > user.date) {
        return highestNum;
      }
      return user;
    });
    // console.log('numOZ', mostRecentDayData.numOunces);
    return mostRecentDayData.numOunces;
  }

  obtainOuncesPerDayOverAWeek(waterData) {
    // console.log('fn', waterData)
    let parsedDates = waterData.map(user => {
      user.date = Date.parse([user.date]);
      return user;
    });

    let weeklyOunces = parsedDates.sort((firstDate, secondDate) => {
      return secondDate.date - firstDate.date;
    });
    // console.log(weeklyOunces)

    const slicedArray = weeklyOunces.slice(0, 7);
    // console.log(slicedArray)
    var actualOunces = slicedArray.map(dayObj => {
      return dayObj.numOunces;
    });
    // console.log('finalOZ', actualOunces)
    return actualOunces;
  }
}

export default Hydration;
