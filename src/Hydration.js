class Hydration {
  constructor(hydrationData) {
    this.data = hydrationData;
  }
 //obtainHydrationDataBasedOnId
  obtainHydrationDataById(id) {
    let waterData = this.data.filter((hydro) => {
      return hydro.userID === id;
    });
    return waterData;
  }

//obtainAveOuncesConsumedPerDay(
  obtainAverageDailyOunces(waterData) {
    let totalOunces = waterData.reduce((total, day) => {
      total += day.numOunces;
      return total;
    }, 0);
    let aveOunces = totalOunces / waterData.length;
    return Number(aveOunces.toFixed(1));
  }

//obtainOuncesForMostRecentDay
  obtainTodaysOunces(waterData) {
    let lastIndexNum = [waterData.length - 1]
    let indexOfBigData = (waterData[lastIndexNum]);
    return indexOfBigData.numOunces;
  }

//obtainOuncesPerDayOverAWeek
  obtainWeeklyOunces(waterData) {
    let indexNum = [waterData.length - 1]
    let objectAtIndex = (waterData[indexNum]);
    let recentDate = objectAtIndex.date;
    let allDates = waterData.map(obj => obj.date);
    let dateIndex = allDates.indexOf(recentDate);
    let wholeWeek = waterData.slice([dateIndex - 6], [dateIndex +1]);
    let final = wholeWeek.map(day => {
      return {
        [day.date]: day.numOunces
      }
    });
    // if day === underfined, as in it's not in our allData/
    // 'please choose a different day!'
    return final;
  }
}

export default Hydration;
