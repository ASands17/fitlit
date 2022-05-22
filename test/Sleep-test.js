import { expect } from 'chai';
import Sleep from '../src/Sleep';

describe('Sleep', () => {
  let sleep;
  let testUserData;

  beforeEach(() => {
    testUserData = [
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
        "hoursSlept": 8.4,
        "sleepQuality": 1.2
      },
    ];
    sleep = new Sleep(testUserData);
    //re-evaluate parameter depending on class structure
  });

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {
    expect(testUserData).to.be.an('array');
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should be able to take in user sleep data', () => {
    expect(sleep.data).to.equal(testUserData);
  });

  it('should be able to obtain sleep data based on id', () => {
    expect(sleep.acquireSleepDataBasedOnId(1)).to.deep.equal(
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
      ]);

      expect(sleep.acquireSleepDataBasedOnId(2)).to.deep.equal(
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
            "hoursSlept": 8.4,
            "sleepQuality": 1.2
          },
        ]);

    expect(sleep.acquireSleepDataBasedOnId()).to.be.an('array');
  });

  //Examples of possible test structures from hydration

  it('should be able to obtain average hours of sleep over all time', () => {
    let sleepData1 = sleep.acquireSleepDataBasedOnId(1);

    expect(sleep.acquireAvgHoursSleptForAllData(sleepData1)).to.be.a('number');
    expect(sleep.acquireAvgHoursSleptForAllData(sleepData1)).to.equal(7.33);

    let sleepData2 = sleep.acquireSleepDataBasedOnId(2);

    expect(sleep.acquireAvgHoursSleptForAllData(sleepData2)).to.be.a('number');
    expect(sleep.acquireAvgHoursSleptForAllData(sleepData2)).to.equal(7.33);
  });

  it('should be able to obtain average sleep quality over all time', () => {
    let sleepData1 = sleep.acquireSleepDataBasedOnId(1);

    expect(sleep.acquireAvgSleepQualityForAllData(sleepData1)).to.be.a('number');
    expect(sleep.acquireAvgSleepQualityForAllData(sleepData1)).to.equal(2.30);

    let sleepData2 = sleep.acquireSleepDataBasedOnId(2);

    expect(sleep.acquireAvgSleepQualityForAllData(sleepData2)).to.be.a('number');
    expect(sleep.acquireAvgSleepQualityForAllData(sleepData2)).to.equal(2.30);
  });

  it('should be able to acquire hours slept for a specific date for a specific user', () => {
    let sleepData1 = sleep.acquireSleepDataBasedOnId(1);
    let userDates1 = sleep.acquireAllUserDates(sleepData1);

    expect(sleep.acquireHoursSleptForASpecificDay("2019/06/15")).to.be.a('number');
    expect(sleep.acquireHoursSleptForASpecificDay("2019/06/15")).to.equal(6.1);

    let sleepData2 = sleep.acquireSleepDataBasedOnId(2);
    let userDates2 = sleep.acquireAllUserDates(sleepData2);

    expect(sleep.acquireHoursSleptForASpecificDay("2019/06/16")).to.be.a('number');
    expect(sleep.acquireHoursSleptForASpecificDay("2019/06/16")).to.equal(7.5);
  });

  it.skip('should obtain ounces for most recent day', () => {
    let waterData1 = hydration.obtainHydrationDataBasedOnId(1);
    let ounces1 = hydration.obtainOuncesForMostRecentDay(waterData1);

    expect(ounces1).to.equal(63);

    let waterData2 = hydration.obtainHydrationDataBasedOnId(2);
    let ounces2 = hydration.obtainOuncesForMostRecentDay(waterData2);

    expect(ounces2).to.equal(45);
  })

  it.skip('should obtain ounces for most recent week', () => {
    let waterData1 = hydration.obtainHydrationDataBasedOnId(1);
    let ounces1 = hydration.obtainOuncesPerDayOverAWeek(waterData1);

    expect(ounces1).to.deep.equal([31,68,92,45,33,89,63]);

    let waterData2 = hydration.obtainHydrationDataBasedOnId(2);
    let ounces2 = hydration.obtainOuncesPerDayOverAWeek(waterData2);

    expect(ounces2).to.deep.equal([55,67,47,21,29,14,45]);
  })

});
