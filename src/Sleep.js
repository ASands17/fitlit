
class Sleep{
  constructor(sleepData) {
    this.data = sleepData;
  }

  acquireSleepDataBasedOnId(id) {
    let sleepData = this.data.filter((snooze) => {
      return snooze.userID === id;
    });
    return sleepData;
  }

  acquireAvgHoursSleptPerDay(sleepData) {
   let totalHours = sleepData.reduce((total, day) => {
     total += day.hoursSlept;
     return total;
   }, 0);
   let aveHours = totalHours / sleepData.length;
   return Number(aveHours.toFixed(1));
  }

  acquireAvgSleepQualityPerDay(sleepData) {
    let totalQuality = sleepData.reduce((total, day) => {
      total += day.sleepQuality;
      return total;
    }, 0);
    let aveQuality = totalQuality / sleepData.length;
    return Number(aveQuality.toFixed(1));
  }

  acquireHoursSleptForASpecificDay(data, date) {
    let sleepData = data.filter((snooze) => {
      return snooze.date === date;
    });
    // console.log('81', sleepData)
    // console.log('61', sleepData[0].hoursSlept)
    return sleepData[0].hoursSlept;
  }

  acquireSleepQualityForASpecificDay(data, date) {
    let sleepData = data.filter((snooze) => {
      return snooze.date === date;
    });
    // console.log('81', sleepData)
    // console.log('61', sleepData[0].sleepQuality)
    return sleepData[0].sleepQuality;
  }

  acquireHoursSleptEachDayForAWeek(data, date) {
    let allDates = data.map(obj => obj.date);
    let dateIndex = allDates.indexOf(date);
    // console.log('dateIndex', dateIndex)
    let wholeWeek = data.slice([dateIndex - 6], [dateIndex +1]);
    // console.log('68', wholeWeek)
    // console.log('week', wholeWeek)
    let final = wholeWeek.map(day => {
      return {[day.date]: day.hoursSlept}
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
    // console.log('hoursleptfinal', final)
    return final;
  }

  acquireSleepQualityEachDayForAWeek(data, date) {
    let allDates = data.map(obj => obj.date);
    let dateIndex = allDates.indexOf(date);
    let wholeWeek = data.slice([dateIndex - 6], [dateIndex +1]);
    // console.log('week', wholeWeek)
    let final = wholeWeek.map(day => {
      return {[day.date]: day.sleepQuality}
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
  }

  acquireAvgSleepQualityAllUsers() {
    let totalSleepQuality = this.data.reduce((totalQuality, currentUser) => {
      totalQuality += currentUser.sleepQuality;
      return totalQuality;
    }, 0);
    let averageSleepQuality = totalSleepQuality / this.data.length;
    return Number(averageSleepQuality.toFixed(1));
  }

  acquireUserAvgSleepQuality(data) {
    let totalSleepQuality = data.reduce((totalQuality, currentUser) => {
      totalQuality += currentUser.sleepQuality;
      return totalQuality;
    }, 0);
    let averageSleepQuality = totalSleepQuality / data.length;
    return Number(averageSleepQuality.toFixed(1));
  }

  acquireUserAvgSleepHours(data) {
    let totalSleepHours = data.reduce((totalHours, currentUser) => {
      totalHours += currentUser.hoursSlept;
      return totalHours;
    }, 0);
    let averageSleepHours = totalSleepHours / data.length;
    return Number(averageSleepHours.toFixed(1));
  }
}

export default Sleep;
