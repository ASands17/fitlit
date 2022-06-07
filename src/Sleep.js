class Sleep {
  constructor(sleepData) {
    this.data = sleepData;
  }

  acquireSleepDataById(id) {
      let sleepData = this.data.filter((snooze) => {
        return snooze.userID === id;
      });
      if (sleepData.length === 0) {
        return 'Invalid ID!';
      }
      return sleepData;
  }

  acquireAverageDailyMetric(measurements) {
    let sum = measurements.reduce((total, currentMetric) => {
      return total += currentMetric;
    }, 0);
    let averageMeasurement = sum / measurements.length;
    return Number(averageMeasurement.toFixed(1));
  }

  acquireDailyHoursSlept(data, date) {
    let sleepData = data.filter((snooze) => {
      return snooze.date === date;
    });
    if (sleepData.length === 0) {
      return 'Invalid date!';
    }
    return sleepData[0].hoursSlept;
  }

  acquireDailySleepQuality(data, date) {
    let sleepData = data.filter((snooze) => {
      return snooze.date === date;
    });
    if (sleepData.length === 0) {
      return 'Invalid date!';
    }
    return sleepData[0].sleepQuality;
  }

  acquireWeeklyHoursSlept(data, date) {
    let allDates = data.map(obj => obj.date);
    let dateIndex = allDates.indexOf(date);
    let wholeWeek = data.slice([dateIndex - 6], [dateIndex +1]);
    let finalDates = wholeWeek.map(day => {
      return {
        [day.date]: day.hoursSlept
      }
    });
    if (finalDates.length === 0) {
      return 'Invalid date!';
    }
    return finalDates;
  }

  acquireWeeklySleepQuality(data, date) {
    let allDates = data.map(obj => obj.date);
    let dateIndex = allDates.indexOf(date);
    let wholeWeek = data.slice([dateIndex - 6], [dateIndex +1]);
    let finalDates = wholeWeek.map(day => {
      return {
        [day.date]: day.sleepQuality
      }
    });
    if (finalDates.length === 0) {
      return 'Invalid date!';
    }
    return finalDates;
  }

  acquireUniversalAveSleepQuality() {
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
    if (totalSleepQuality === 0) {
      return 'User is missing this data!';
    }
    let averageSleepQuality = totalSleepQuality / data.length;
    return Number(averageSleepQuality.toFixed(1));
  }

  acquireUserAvgSleepHours(data) {
    let totalSleepHours = data.reduce((totalHours, currentUser) => {
      totalHours += currentUser.hoursSlept;
      return totalHours;
    }, 0);
    if (totalSleepHours === 0) {
      return 'User is missing this data!';
    }
    let averageSleepHours = totalSleepHours / data.length;
    return Number(averageSleepHours.toFixed(1));
  }
}

export default Sleep;
