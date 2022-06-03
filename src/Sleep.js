class Sleep {
  constructor(sleepData) {
    this.data = sleepData;
  }

  acquireSleepDataBasedOnId(id) {
    let sleepData = this.data.filter((snooze) => {
      return snooze.userID === id;
    });
    return sleepData;
  }

  acquireAverageMetricPerDay(measurements) {
    let sum = measurements.reduce((total, currentMetric) => {
      return total += currentMetric
    }, 0);
    let averageMeasurement = sum / measurements.length;
    return Number(averageMeasurement.toFixed(1));
  }

  acquireHoursSleptForASpecificDay(data, date) {
    let sleepData = data.filter((snooze) => {
      return snooze.date === date;
    });
    return sleepData[0].hoursSlept;
  }

  acquireSleepQualityForASpecificDay(data, date) {
    let sleepData = data.filter((snooze) => {
      return snooze.date === date;
    });
    return sleepData[0].sleepQuality;
  }

  acquireHoursSleptEachDayForAWeek(data, date) {
    let allDates = data.map(obj => obj.date);
    let dateIndex = allDates.indexOf(date);
    let wholeWeek = data.slice([dateIndex - 6], [dateIndex +1]);
    let final = wholeWeek.map(day => {
      return {
        [day.date]: day.hoursSlept
      }
    });
    return final;
  }

  acquireSleepQualityEachDayForAWeek(data, date) {
    let allDates = data.map(obj => obj.date);
    let dateIndex = allDates.indexOf(date);
    let wholeWeek = data.slice([dateIndex - 6], [dateIndex +1]);
    let final = wholeWeek.map(day => {
      return {[day.date]: day.sleepQuality}
    });
    return final;
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
