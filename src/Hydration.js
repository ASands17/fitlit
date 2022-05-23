class Hydration {
  constructor(hydrationData) {
    this.data = hydrationData;
  }

  obtainHydrationDataBasedOnId(id) {
    let waterData = this.data.filter((hydro) => {
      // console.log("id", waterData.userID);
      return hydro.userID === id;
    });
    // console.log('waterData', waterData)
    // console.log("hydro", hydro);'
    return waterData;
  }

  obtainAveOuncesConsumedPerDay(waterData) {
    let totalOunces = waterData.reduce((total, day) => {
      total += day.numOunces;
      return total;
    }, 0);
    let aveOunces = totalOunces / waterData.length;
    // console.log("aveOunces", aveOunces)
    return Number(aveOunces.toFixed(2));
  }

  obtainOuncesForMostRecentDay(waterData) {
    let lastIndexNum = [waterData.length - 1]
    let indexOfBigData = (waterData[lastIndexNum]);
    // console.log(indexOfBigData.numOunces);
    return indexOfBigData.numOunces;
  }

  obtainOuncesPerDayOverAWeek(waterData) {
    let indexNum = [waterData.length - 1]
    let objectAtIndex = (waterData[indexNum]);
    // console.log('31', objectAtIndex.date);
    let recentDate = objectAtIndex.date;
    // console.log('recent date', recentDate)

    let allDates = waterData.map(obj => obj.date);
    let dateIndex = allDates.indexOf(recentDate);
    // console.log(dateIndex)
    let wholeWeek = waterData.slice([dateIndex - 6], [dateIndex +1]);
    // console.log('week', wholeWeek)
    let final = wholeWeek.map(day => {
      return {[day.date]: day.numOunces}
    });

    var final2 = final.map(ele => {
      return JSON.stringify(ele)
    })
    var final3 = final2.map(ele => {
      return ele.replace(/[{}]/g,'')
    })
    var final4 = final3.map(ele => {
      return ele.replace(/['"]/g,'')
    })
    return final4;
    // console.log('array of ozs', final)
    return final;
  }
}

export default Hydration;
