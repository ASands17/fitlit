
class Hydration {
  constructor(hydrationData, id) {
    this.data = hydrationData;
    this.id = id;
  }

// hydrationData = [{id1}, {id2}, {id3},...{id50}, {id1}, {id2}, {id3},...{id50}, {id1}, {id2}, {id3},...{id50}]
//                         2019/06/15                |        2019/06/16               |     2019/06/17

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
      {
        "userID": 1,
        "date": "2019/06/22",
        "numOunces": 66
      },
      {
        "userID": 1,
        "date": "2019/06/23",
        "numOunces": 22
      },
      {
        "userID": 1,
        "date": "2019/06/24",
        "numOunces": 77
      },
      {
        "userID": 1,
        "date": "2019/07/25",
        "numOunces": 44
      },
      {
        "userID": 1,
        "date": "2019/06/26",
        "numOunces": 55
      },
      {
        "userID": 1,
        "date": "2019/07/27",
        "numOunces": 11
      },
      {
        "userID": 1,
        "date": "2019/07/28",
        "numOunces": 20
      },
    ];

    let parsedDates = hydro1.map(user => {
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

    console.log(actualOunces)
  }
}


export default Hydration;
