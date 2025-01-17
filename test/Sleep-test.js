import { expect } from 'chai';
import Sleep from '../src/Sleep';
import sleepData from '../test-data/Sleep-data';

describe('Sleep', () => {
  let sleep;
  let sleepData1, sleepData2;

  beforeEach(() => {
    sleep = new Sleep(sleepData);
    sleepData1 = sleep.acquireSleepDataById(1);
    sleepData2 = sleep.acquireSleepDataById(2);
  });

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {
    expect(sleepData).to.be.an('array');
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should be able to take in user sleep data', () => {
    expect(sleep.data).to.be.an('array');
    expect(sleep.data).to.deep.equal(sleepData);
  });

  it('should be able to test whether the id is valid and also return a message if it not', () => {
    let sleepData3 = sleep.acquireSleepDataById(77);
    expect(sleep.acquireSleepDataById(77)).to.equal('Invalid ID!')
  });

  it('should be able to acquire sleep data based on id', () => {
    expect(sleep.acquireSleepDataById(1)).to.be.an('array');
    expect(sleep.acquireSleepDataById(1)).to.deep.equal(
      [
        {
          "userID": 1,
          "date": "2019/06/15",
          "hoursSlept": 6.1,
          "sleepQuality": 2.2
        },
        {
          "userID": 1,
          "date": "2019/06/16",
          "hoursSlept": 7.5,
          "sleepQuality": 3.5
        },
        {
          "userID": 1,
          "date": "2019/06/17",
          "hoursSlept": 8.4,
          "sleepQuality": 1.2
        },
        {
          "userID": 1,
          "date": "2019/06/18",
          "hoursSlept": 6.1,
          "sleepQuality": 2.2
        },
        {
          "userID": 1,
          "date": "2019/06/19",
          "hoursSlept": 7.5,
          "sleepQuality": 3.5
        },
        {
          "userID": 1,
          "date": "2019/06/20",
          "hoursSlept": 8.4,
          "sleepQuality": 1.2
        },
        {
          "userID": 1,
          "date": "2019/06/21",
          "hoursSlept": 6.1,
          "sleepQuality": 2.2
        },
        {
          "userID": 1,
          "date": "2019/06/22",
          "hoursSlept": 7.5,
          "sleepQuality": 3.5
        },
        {
          "userID": 1,
          "date": "2019/06/23",
          "hoursSlept": 8.4,
          "sleepQuality": 1.2
        }
      ]);
    expect(sleep.acquireSleepDataById(2)).to.deep.equal(
      [
        {
          "userID": 2,
          "date": "2019/06/15",
          "hoursSlept": 6.1,
          "sleepQuality": 2.2
        },
        {
          "userID": 2,
          "date": "2019/06/16",
          "hoursSlept": 7.5,
          "sleepQuality": 3.5
        },
        {
          "userID": 2,
          "date": "2019/06/17",
          "hoursSlept": 7.4,
          "sleepQuality": 2.2
        },
        {
          "userID": 2,
          "date": "2019/06/18",
          "hoursSlept": 7.1,
          "sleepQuality": 3.2
        },
        {
          "userID": 2,
          "date": "2019/06/19",
          "hoursSlept": 8.5,
          "sleepQuality": 3.8
        },
        {
          "userID": 2,
          "date": "2019/06/20",
          "hoursSlept": 7.4,
          "sleepQuality": 2.2
        },
        {
          "userID": 2,
          "date": "2019/06/21",
          "hoursSlept": 6.7,
          "sleepQuality": 2.9
        },
        {
          "userID": 2,
          "date": "2019/06/22",
          "hoursSlept": 7.8,
          "sleepQuality": 5.5
        },
        {
          "userID": 2,
          "date": "2019/06/23",
          "hoursSlept": 8.0,
          "sleepQuality": 1.6
        }
      ]);
  });

  it('should be able to acquire average daily hours of sleep', () => {
    let sleepHours1 = sleepData1.map(data => data.hoursSlept)
    let sleepHours2 = sleepData2.map(data => data.hoursSlept)
    expect(sleep.acquireAverageDailyMetric(sleepHours1)).to.be.a('number');
    expect(sleep.acquireAverageDailyMetric(sleepHours1)).to.equal(7.3);
    expect(sleep.acquireAverageDailyMetric(sleepHours2)).to.be.a('number');
    expect(sleep.acquireAverageDailyMetric(sleepHours2)).to.equal(7.4);
  });

  it('should be able to acquire average daily sleep quality', () => {
    let sleepQuality1 = sleepData1.map(data => data.sleepQuality)
    let sleepQuality2 = sleepData2.map(data => data.sleepQuality)
    expect(sleep.acquireAverageDailyMetric(sleepQuality1)).to.be.a('number');
    expect(sleep.acquireAverageDailyMetric(sleepQuality1)).to.equal(2.3);
    expect(sleep.acquireAverageDailyMetric(sleepQuality2)).to.be.a('number');
    expect(sleep.acquireAverageDailyMetric(sleepQuality2)).to.equal(3.0);
  });

  it('should be able to acquire hours slept for a specific date for a specific user', () => {
    expect(sleep.acquireDailyHoursSlept(sleepData1, "2019/06/15")).to.be.a('number');
    expect(sleep.acquireDailyHoursSlept(sleepData1, "2019/06/15")).to.equal(6.1);
    expect(sleep.acquireDailyHoursSlept(sleepData2, "2019/06/16")).to.be.a('number');
    expect(sleep.acquireDailyHoursSlept(sleepData2, "2019/06/16")).to.equal(7.5);
  });

  it('should be able to notify user if date is invalid', () => {
    expect(sleep.acquireDailyHoursSlept(sleepData1, "2022/06/15")).to.be.a('string');
    expect(sleep.acquireDailyHoursSlept(sleepData1, "2022/06/15")).to.equal('Invalid date!');
  });

  it('should be able to acquire sleep quality for a specific date for a specific user', () => {
    expect(sleep.acquireDailySleepQuality(sleepData1, "2019/06/15")).to.be.a('number');
    expect(sleep.acquireDailySleepQuality(sleepData1, "2019/06/15")).to.equal(2.2);
    expect(sleep.acquireDailySleepQuality(sleepData2, "2019/06/16")).to.be.a('number');
    expect(sleep.acquireDailySleepQuality(sleepData2, "2019/06/16")).to.equal(3.5);
  });

  it('should be able to notify user if date is invalid', () => {
    expect(sleep.acquireDailySleepQuality(sleepData1, "2022/06/15")).to.be.a('string');
    expect(sleep.acquireDailySleepQuality(sleepData1, "2022/06/15")).to.equal('Invalid date!');
  });

  it('should be able to test whether the date is valid for hours slept and also return a message if it not', () => {
    expect(sleep.acquireWeeklyHoursSlept(sleepData1, "2022/06/04")).to.be.a('string');
    expect(sleep.acquireWeeklyHoursSlept(sleepData1, "2022/06/04")).to.equal('Invalid date!')
  });

  it('should be able to test whether the date is valid for sleep quality and also return a message if it not', () => {
    expect(sleep.acquireWeeklySleepQuality(sleepData1, "2022/06/04")).to.be.a('string');
    expect(sleep.acquireWeeklySleepQuality(sleepData1, "2022/06/04")).to.equal('Invalid date!')
  });

  it('should be able to acquire hours slept over the course of a week', () => {
    expect(sleep.acquireWeeklyHoursSlept(sleepData1, "2019/06/23")).to.be.an('array');
    expect(sleep.acquireWeeklyHoursSlept(sleepData1, "2019/06/23")).to.deep.equal([
      {
        "2019/06/17": 8.4
      },
      {
        "2019/06/18": 6.1
      },
      {
        "2019/06/19": 7.5
      },
      {
        "2019/06/20": 8.4
      },
      {
        "2019/06/21": 6.1
      },
      {
        "2019/06/22": 7.5
      },
      {
        "2019/06/23": 8.4
      }
    ]);
    expect(sleep.acquireWeeklyHoursSlept(sleepData2, "2019/06/23")).to.be.an('array');
    expect(sleep.acquireWeeklyHoursSlept(sleepData2, "2019/06/23")).to.deep.equal([
      {
        "2019/06/17": 7.4
      },
      {
        "2019/06/18": 7.1
      },
      {
        "2019/06/19": 8.5
      },
      {
        "2019/06/20": 7.4
      },
      {
        "2019/06/21": 6.7
      },
      {
        "2019/06/22": 7.8
      },
      {
        "2019/06/23": 8
      }
    ]);
  });

  it('should be able to acquire sleep quality over the course of a week', () => {
    expect(sleep.acquireWeeklySleepQuality(sleepData1, "2019/06/23")).to.be.an('array');
    expect(sleep.acquireWeeklySleepQuality(sleepData1, "2019/06/23")).to.deep.equal([
      {
        "2019/06/17": 1.2
      },
      {
        "2019/06/18": 2.2
      },
      {
        "2019/06/19": 3.5
      },
      {
        "2019/06/20": 1.2
      },
      {
        "2019/06/21": 2.2
      },
      {
        "2019/06/22": 3.5
      },
      {
        "2019/06/23": 1.2
      }
    ]);
    expect(sleep.acquireWeeklySleepQuality(sleepData2, "2019/06/23")).to.be.an('array');
    expect(sleep.acquireWeeklySleepQuality(sleepData2, "2019/06/23")).to.deep.equal([
      {
        "2019/06/17": 2.2
      },
      {
        "2019/06/18": 3.2
      },
      {
        "2019/06/19": 3.8
      },
      {
        "2019/06/20": 2.2
      },
      {
        "2019/06/21": 2.9
      },
      {
        "2019/06/22": 5.5
      },
      {
        "2019/06/23": 1.6
      }
    ]);
  });

  it('should be able to calculate average sleep quality of all users', () => {
    expect(sleep.acquireUniversalAveSleepQuality()).to.be.a('number');
    expect(sleep.acquireUniversalAveSleepQuality()).to.equal(2.7);
  });

  it('should be able to calculate average sleep quality of one user', () => {
    expect(sleep.acquireUserAvgSleepQuality(sleepData1)).to.be.a('number');
    expect(sleep.acquireUserAvgSleepQuality(sleepData1)).to.equal(2.3);
    expect(sleep.acquireUserAvgSleepQuality(sleepData2)).to.be.a('number');
    expect(sleep.acquireUserAvgSleepQuality(sleepData2)).to.equal(3.0);
  });

  it('should be able give a notification message when sleep hours is unavailable', () => {
    let user10Data = [{
      "userID": 10,
      "date": null,
      "hoursSlept": null,
      "sleepQuality": null
    },
    {
      "userID": 10,
      "date": null,
      "hoursSlept": null,
      "sleepQuality": null
    }
  ]
    expect(sleep.acquireUserAvgSleepHours(user10Data)).to.be.a('string');
    expect(sleep.acquireUserAvgSleepHours(user10Data)).to.equal('User is missing this data!');
  });

  it('should be able to give a notification message when sleep quality is unavailable', () => {
    let user10Data = [{
      "userID": 10,
      "date": null,
      "hoursSlept": null,
      "sleepQuality": null
    },
    {
      "userID": 10,
      "date": null,
      "hoursSlept": null,
      "sleepQuality": null
    }
  ]
    expect(sleep.acquireUserAvgSleepQuality(user10Data)).to.be.a('string');
    expect(sleep.acquireUserAvgSleepQuality(user10Data)).to.equal('User is missing this data!');
  });

  it('should be able to calculate average sleep hours of one user', () => {
    expect(sleep.acquireUserAvgSleepHours(sleepData1)).to.be.a('number');
    expect(sleep.acquireUserAvgSleepHours(sleepData1)).to.equal(7.3);
    expect(sleep.acquireUserAvgSleepHours(sleepData2)).to.be.a('number');
    expect(sleep.acquireUserAvgSleepHours(sleepData2)).to.equal(7.4);
  });
});
