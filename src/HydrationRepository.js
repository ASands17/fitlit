import UserHydration from '../src/UserHydration';

class HydrationRepository {
  constructor(hydrationData) {
    this.data = hydrationData;
  }

// hydrationData = [{id1}, {id2}, {id3},...{id50}, {id1}, {id2}, {id3},...{id50}, {id1}, {id2}, {id3},...{id50}]
//                         6/15/19                |        6/16/19               |     6/17/19

  obtainHydrationDataBasedOnId(id) {
    let hydro = this.data.filter((waterData) => {
      // console.log("id", waterData.userID);
      return waterData.userID === id;
    })
    // console.log("hydro", hydro);'
    this.obtainAveOuncesConsumedPerDay(hydro);
    return hydro;
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
}

export default HydrationRepository;