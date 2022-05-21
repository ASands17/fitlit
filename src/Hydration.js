import hydrationData from './data/fake-hydration'

class Hydration {
  constructor(hydrationData, id) {
    this.data = hydrationData;
    this.id = id;
  }

// hydrationData = [{id1}, {id2}, {id3},...{id50}, {id1}, {id2}, {id3},...{id50}, {id1}, {id2}, {id3},...{id50}]
//                         2019/06/15                |        2019/06/16               |     2019/06/17

  obtainHydrationDataBasedOnId(id) {
    let waterData = this.data.filter((hydro) => {
      // console.log("id", waterData.userID);
      return hydro.userID === id;
    })
    console.log('waterData', waterData)
    // console.log("hydro", hydro);'
    // this.obtainAveOuncesConsumedPerDay(waterData);
    // this.obtainOuncesForMostRecentDay(waterData);
    // this.obtainOuncesPerDayOverAWeek(waterData);
    return waterData;
  }

  obtainAveOuncesConsumedPerDay(waterData) {
    let totalOunces = waterData.reduce((acc, cur) => {
      acc += cur.numOunces;
      return acc;
    }, 0)
    let aveOunces = totalOunces / waterData.length;
    // console.log("aveOunces", aveOunces)
    return Number(aveOunces.toFixed(2));
  }

  obtainOuncesForMostRecentDay(waterData) {
    let parsedDates = waterData.map(user => {
      user.date = Date.parse([user.date])
      return user
    });

    let mostRecentDayData = parsedDates.reduce((highest, user) => {
      if (highest.date > user.date) {
        return highest
      }
      return user
    });
    console.log('numOZ', mostRecentDayData.numOunces);
    return mostRecentDayData.numOunces;
  }

  obtainOuncesPerDayOverAWeek(waterData) {
    console.log('fn', waterData)
    let parsedDates = waterData.map(user => {
      user.date = Date.parse([user.date]);
      return user;
    });

    let weeklyOunces = parsedDates.sort((a, b) => {
      return b.date - a.date;
    });
    console.log(weeklyOunces)

    const slicedArray = weeklyOunces.slice(0, 7);
    console.log(slicedArray)
    var actualOunces = slicedArray.map(dayObj => {
      return dayObj.numOunces;
    });
    console.log('finalOZ', actualOunces)
    return actualOunces;
  }
}


export default Hydration;
