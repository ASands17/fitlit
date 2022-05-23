class Hydration {
  constructor(hydrationData) {
    this.data = hydrationData;
  }

  obtainHydrationDataBasedOnId(id) {
    let waterData = this.data.filter((hydro) => {
      return hydro.userID === id;
    });
    return waterData;
  }

  obtainAveOuncesConsumedPerDay(waterData) {
    let totalOunces = waterData.reduce((total, day) => {
      total += day.numOunces;
      return total;
    }, 0);
    let aveOunces = totalOunces / waterData.length;
    return Number(aveOunces.toFixed(1));
  }

  obtainOuncesForMostRecentDay(waterData) {
    let lastIndexNum = [waterData.length - 1]
    let indexOfBigData = (waterData[lastIndexNum]);
    return indexOfBigData.numOunces;
  }

  obtainOuncesPerDayOverAWeek(waterData) {
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

    var final2 = final.map(ele => {
      return JSON.stringify(ele)
    });
    var final3 = final2.map(ele => {
      return ele.replace(/[{}]/g,'')
    });
    var final4 = final3.map(ele => {
      return ele.replace(/['"]/g,'')
    });
    return final4;
  }
}

export default Hydration;
